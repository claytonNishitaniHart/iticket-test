import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/home';
import EventPage from './components/eventPage/eventPage';
import './App.css';
import ShoppingCart from './components/shoppingCart/shoppingCart';

function App() {
  const [cart, setCart] = useState([]);

  const updateCart = (ticketObj) => {
    const oldTicket = cart.find(ticket => ticket.eventName === ticketObj.eventName && ticket.ticketType === ticketObj.ticketType);
    const filteredCart = [...cart];
    if (oldTicket) {
      filteredCart[cart.indexOf(oldTicket)] = ticketObj;
      setCart(filteredCart);
    } else {
      setCart([...cart, ticketObj]);
    }
  }

  return (
    <>
      <ShoppingCart tickets={cart} />
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
    </>
  );
}

export default App;
