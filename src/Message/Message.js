import React, { forwardRef } from 'react'
import {Card, CardContent, Typography} from '@material-ui/core';
import messageStyle from './Message.module.css';
import db from '../firebase';

const Message = forwardRef(({message, username, id}, ref) => {

    const isUser = username === message.username;

    function deleteChat(e) {
        db.collection('messengers').doc(`${e.target.id}`).delete()
    }
    
    return (
        
        <div  ref={ref} className={`${messageStyle.message} ${isUser ?  messageStyle.message__user : ''}`}>
            {!isUser && <h5 className={messageStyle.message__h5}>{`${message.username||'Stranger'}`}</h5>}
            <Card className={isUser ? messageStyle.message__userCard : messageStyle.message__guestCard}>
                <CardContent className={messageStyle.card__content} >
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
