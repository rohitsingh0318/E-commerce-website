import React from 'react'
import Header from '../Header'
import Card from '../Card'

const CartPage = ({cart, deleteCart, updateQuantity}) => {
  return (
    <>
        {/* <Header/> */}
        <Card cart={cart} deleteCart={deleteCart} updateQuantity={updateQuantity} />
    </>
  )
}

export default CartPage