import React, {useState} from 'react';
import {Button, makeStyles, TextField, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Note from './Note';

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
  const [notes, setNotes] = useState(['']);
  const sendNotes = (event) => {
    event.preventDefault();
    // all the logic to send a message goes here
    setNotes([...notes, input]);
    setInput(''); 
  }

  return (
    <div className="App">
      <FormControl>
      <TextField id="outlined-basic" label="Take a note" variant="outlined" multiline value={input} onChange={event => setInput(event.target.value) }/>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={sendNotes}
        disabled={!input}
      >
        Send
      </Button>
      </FormControl>

      <div className="notes">
      { 
        notes.map(note => (
          <Note text={note}/>
        ))
      }
      </div>
      
    </div>
  );
}

export default App;
