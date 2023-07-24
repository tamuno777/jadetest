import React from 'react'
import { useContext } from 'react'
import { PRODUCTS } from "../Products"
import { useNavigate } from "react-router-dom";


import { Storecontext } from '../context/Store-context'
import Cartitem from './Cartitem'


export default function Cart() {
  const {  cartItems , getTotalCartAmount, checkout } = useContext(Storecontext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();


  return (
    <div className="cart mt-5">
    <div>
      <h1>HELLO DEAR !!!</h1>
    </div>
    <div className="cart">
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <Cartitem key={product.id} data={product} />
          // else(
          //   return

          // )
         
        }
      })}
    </div>

    {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/Store")}> Continue Shopping </button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    
    </div>
  )
}
 