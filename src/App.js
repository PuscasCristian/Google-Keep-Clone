import React, {useState, useEffect} from 'react';
import {Button, TextField, FormControl } from '@material-ui/core';
import './App.css';
import Note from './Note';
import { db } from "./firebase";
import firebase from 'firebase';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   root: {
//     '& .MuiInputBase-root': {
//       margin: theme.spacing(1),
//       width: '500px',
//     },
//   }
  
// }));



function App() {
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState([]);
  const sendNote = (event) => {
    event.preventDefault();
    // all the logic to send a message goes here
    db.collection('notes').add({
      note: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput(''); 
  };

  useEffect(() => {
    db.collection('notes')
    .orderBy('timestamp', 'desc' )
    .onSnapshot(snapshot => {
      let notes = [];
      snapshot.forEach(doc => {
        notes.push({...doc.data(), id: doc.id});
      });
      console.log(notes);
      setNotes(notes);
    })
  }, []);
  notes.map(note => console.log(note));

  return (
    <div className="App">
      <FormControl>
      <TextField id="outlined-basic" label="Take a note" variant="outlined" multiline value={input} onChange={event => setInput(event.target.value) }/>
      <Button
        variant="contained"
        color="primary"
        className="button-send"
        onClick={sendNote}
        disabled={!input}
      >
        Send
      </Button>
      </FormControl>


      <div className="notes"> 
      { notes && notes.map(note => 
      (
        <div className="note" key={note.id}>
          <Note text={note.note}/>
        </div>
      ))}
      </div>

    </div>
  );
}

export default App;
