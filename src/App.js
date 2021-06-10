import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css';
import Header from './components/Header/Header';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
import TinderCards from './components/TinderCards/TinderCards';
import ChatPage from './components/ChatPage/ChatPage'; 
import ChatScreen from './components/ChatScreen/ChatScreen';


function App() {
  return (
    <div className="App">
    {/* <Header /> */}
    <Router>
    <Switch>

    <Route path= '/chat/:person'>
    <Header backButton= '/chat'/>
    <ChatScreen />
    </Route>

    <Route path='/chat' >
    <Header backButton='/'  />
    <ChatPage />
    </Route>

    <Route path='/'>
    <Header/>
    <TinderCards/>
    <SwipeButtons />
    </Route>


    </Switch>
    </Router>
    </div>
  );
}

export default App;
