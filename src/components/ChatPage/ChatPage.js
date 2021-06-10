import React, {useEffect, useState} from 'react';

import Chat from './Chat/Chat';
import database from '../../firebase';
import { Person } from '@material-ui/icons';


const ChatPage = (props) => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        database
        .collection('people')
        .onSnapshot((snapshot) =>
        setPeople( snapshot.docs.map(doc => doc.data())))
    }, [])
    

    return(
        <div>
        {people.map(person => (
            <Chat 
             name= {person.name}
             message= {person.message}
             timestamp= {person.timestamp}
             photo= {person.url}
             key={person.name}   
            />
        ))}
        </div>
    )
}

export default ChatPage;