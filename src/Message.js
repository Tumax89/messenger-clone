import React, { forwardRef } from 'react'
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';
import db from './firebase';

const Message = forwardRef(({message, username, id}, ref) => {

    const isUser = username === message.username;

    function deleteChat(e) {
        db.collection('messengers').doc(`${e.target.id}`).delete()
    }
    
    return (
        
        <div  ref={ref} className={`message ${isUser && 'message__user'}`}>
            {!isUser && <h5>{`${message.username||'Stranger'}`}</h5>}
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent >
                    <Typography
                        id={id} 
                        onClick={ isUser ? deleteChat : undefined}
                        color='initial'
                        variant='inherit'
                        component='p'
                    >
                       {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
    )
});

export default Message;
