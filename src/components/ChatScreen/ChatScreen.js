import classes from './ChatScreen.module.css';
import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import { SettingsInputAntenna } from '@material-ui/icons';

const ChatScreen = () => {

    const [input, setInput] = useState('');

    const [messages, setMessages] = useState([
        {
            name: 'Halsey',
            url: 'https://i.pinimg.com/474x/43/1f/6d/431f6dda81b4d9e6fbf2d83bed95f58f.jpg',
            message:'Hey',
        },
        {
            name: 'Halsey',
            url: 'https://i.pinimg.com/474x/43/1f/6d/431f6dda81b4d9e6fbf2d83bed95f58f.jpg',
            message:'how about a coffee date?',
        },
        {
            message: 'umm... sorry i am very busy these days' 
        }

    ])

    const handleSend = (event) => {
        event.preventDefault();
        if(input !== ''){
            const newText = {
                message: input
            } 
            const newMessages = [...messages, newText];
            setMessages(newMessages);
            setInput('');
        }
    }

    return (
        <div>
           <p className={classes.infoText}>You matched with Halsey on 11/01/21 </p>
           <div className={classes.messageContainer}>
           {messages.map(msg => 
            msg.name ? 
            (
                <div className={classes.message}>
                <Avatar src={msg.url} alt={msg.name} />
                <p>{msg.message}</p>
                </div>
            ) :
            (
                <div className={classes.UserMessage }>
                <p>{msg.message}</p>
                </div>
            )
            
            )}
           </div>
        
        <div>
           <form className={classes.inputContainer}>
               <input 
               className={classes.input}
               placeholder="Text a message"
               value={input}
               onChange= {(event) => setInput(event.target.value) }
            />
               <button onClick={handleSend} className={classes.inputButton} >SEND</button>
           </form> 
        </div>   
        </div>
    )
}

export default ChatScreen;