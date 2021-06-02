import React from 'react'
import ShoppingCartItem from './shoppingCartItem';

const ShoppingCart = ({ tickets }) => {
  return (
    <>
      {
        tickets.map((ticket, index) => {
          return (
            <ShoppingCartItem key={index} ticket={ticket} />
          );
        })
      }
    </>
  )
}

export default ShoppingCart
