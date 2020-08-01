import React, {useState, useEffect} from 'react';
import {Button, makeStyles, TextField, FormControl } from '@material-ui/core';
import './App.css';
import Note from './Note';
import { db } from "./firebase";
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    '& .MuiInputBase-root': {
      margin: theme.spacing(1),
      width: '500px',
    },
  }
  
}));



function App() {
  const classes = useStyles();
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

  // useEffect(() => {
  //   db.collection('notes').onSnapshot(snapshot => {
  //     // setNotes(snapshot.docs.map(doc => doc.data()));
  //   })
  // }, []);
  db.collection("notes").doc("4Dyv40OAofz0JkBhzjiP")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    });

  return (
    <div className="App">
      <FormControl>
      <TextField id="outlined-basic" label="Take a note" variant="outlined" multiline value={input} onChange={event => setInput(event.target.value) }/>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={sendNote}
        disabled={!input}
      >
        Send
      </Button>
      </FormControl>

      <div className="notes"> { 
        notes.map(note => (
          <p>{note}</p>
          // <Note text={note}/>
        ))
      }
      </div>

    </div>
  );
}

export default App;
