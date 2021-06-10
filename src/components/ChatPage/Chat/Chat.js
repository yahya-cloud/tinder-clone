import React from 'react'

import Avatar from '@material-ui/core/Avatar';

import classes from './Chat.module.css';
import {Link} from 'react-router-dom';


 const Chat = (props) => {
    return (
        <Link to={`/chat/${props.name}`}>
        <div className={classes.chatContainer} >
            <Avatar className={classes.image} alt={props.name} src={props.photo} />

            <div className={classes.details}>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            </div>

            <p className={classes.timeStamp}>
                {props.timestamp}
            </p>

        </div>
        </Link>
    )
}

export default Chat;

