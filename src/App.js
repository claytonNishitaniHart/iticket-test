import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/home';
import EventPage from './components/eventPage/eventPage';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const updateCart = (ticketObj) => {
    setCart([...cart, ticketObj]);
  }

  console.log(cart);

  return (
    <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/event/:id'>
        <EventPage updateCart={updateCart} />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
