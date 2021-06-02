import React from 'react';
import styles from './shoppingCartItem.module.css';

const ShoppingCartItem = ({ ticket }) => {
  return (
    <div className={styles.container}>
      <p>{ticket.eventName}</p>
      <p>{ticket.ticketType}</p>
      <p>${ticket.price}</p>
      <p>{ticket.quantity}</p>
    </div>
  )
}

export default ShoppingCartItem
