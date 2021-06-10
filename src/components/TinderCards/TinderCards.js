import React, {useState, useEffect} from 'react';

import classes from './TinderCards.module.css';
import TinderCard from 'react-tinder-card';
import database from '../../firebase';

const TinderCards = (props) => {

    const [people, setPeople] = useState([
        {
            name: 'Dani Daniels',
            url:'https://i.pinimg.com/236x/c0/5c/fe/c05cfe359d5df829aabd07e891ef7847.jpg'
        },
        {
            name: 'Halsey',
            url: 'https://i.pinimg.com/474x/43/1f/6d/431f6dda81b4d9e6fbf2d83bed95f58f.jpg'
        }
        
    ]);

    useEffect(() => {
        database
        .collection('people')
        .onSnapshot((snapshot) =>
        setPeople( snapshot.docs.map(doc => doc.data())))
        
    }, [])

    return(
        <div className={classes.CardContainer}>
        {people.map(person => (
            <TinderCard
            className={classes.Swipe}
            key={person.name}
            preventSwipe={['up', 'down']}
            >
            <div
            className= {classes.Card}
            style={{backgroundImage: `url(${person.url})`}}  >
            <h3 className={classes.Text}>{person.name}</h3>
            </div>
            </TinderCard>
        ))}
        </div>
    )
}

export default TinderCards;