import React, { useState, useEffect } from 'react';
import Message from './Message';
import {TextField, FormControl, IconButton} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {

  const [input, setInput] = useState('');
  const [username, setUser] = useState('');
  const [message, setMess] =  useState([]);

  // Database update automatically
  useEffect(() => {
    db.collection('messengers').orderBy('timestamp').onSnapshot(snapshot => {
      setMess(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, []);

  // prompt input username
  useEffect(() => {
    setUser(prompt('Please enter your name'));
  }, [])

  // onClick send button
  function submit(e) {
    e.preventDefault();
    db.collection('messengers').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setMess([...message, {username: username, message: input}]); 
    setInput('');
  }

  return (
    <div className="App">
        <svg width= '80px' height= '80px' xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
          <title>React Logo</title>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g className='react_logo' stroke="#61dafb" stroke-width="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      <h1>Hello Clever Programmers 🚀</h1>
      <h3>Welcome {username} 👋</h3>
      <div style={{minHeight: '410px'}}>
      <FlipMove>
        {message.map(({id, message}) => {
          return (
            <Message 
            key={id}
            username={username} 
            message={message}/>
            )
        })}
      </FlipMove>
      </div>
      <form className='app__form' onSubmit={submit}>

        <FormControl className='app__formControl'>
          <TextField 
            autoComplete='off'
            className='app__input'
            id="outlined-basic" 
            label="Enter a Message.." 
            variant="outlined"
            size="small"  
            value={input} 
            onChange={e => {setInput(e.target.value)}} 
          />
          <IconButton 
            className='app__iconButton'
            onClick={submit}
            disabled={!input}
            variant="contained"
            color="primary"
            size="medium"
            >
                <Icon>send</Icon>
            </IconButton>
            
        </FormControl>
      </form>
      
    </div>
  );
}

export default App;
