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
    })
    setUser(prompt('Please enter your name'));
  }, []);

  useEffect(() => {
    const heightWrapper = document.getElementById('chat_wrap').offsetHeight
    window.scrollTo(0, heightWrapper)
  }, [message])
  
  

  // onClick send button
  function onSubmit(e) {
    e.preventDefault();
    db.collection('messengers').add({
      message: input,
      username: (username||'Stranger'),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  

  return (
    <div className="App">
    
        <svg width= '100px' height= '100px' xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
          <title>React Logo</title>
          <circle cx="0" cy="0" r="2.35" fill="#ffdb7d"/>
          <g className='react_logo'  strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" stroke="#F8CA51"/>
            <ellipse rx="11" ry="4.2" stroke='#E88634' transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" stroke='#F4A83E' transform="rotate(120)"/>
          </g>
        </svg>
      <h3>Welcome {username||'Stranger'} 👋</h3>

      
      <FlipMove className='chat_wrapper' id='chat_wrap'>
        {message.map(({id, message}) => 
            <Message 
              key={id}
              id={id}
              username={username || 'Stranger'} 
              message={message}
            />
        )}
      </FlipMove>
      
          
      <form className='app__form' onSubmit={onSubmit}>
        <FormControl className='app__formControl'>
          <TextField 
            autoComplete='off'
            className='app__input'
            id="outlined-basic" 
            label={`Chating as ${username || 'Stranger'}`}
            variant="outlined"
            size="small"  
            value={input} 
            onChange={e => {setInput(e.target.value)}} 
          />
          <IconButton 
            className='app__iconButton'
            onClick={onSubmit}
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
