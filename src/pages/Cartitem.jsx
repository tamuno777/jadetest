import React from 'react'
import { Storecontext } from '../context/Store-context'
import { useContext } from 'react'

export default function Cartitem(props) {

    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(Storecontext);
  return (
    <div className="cartItem">
    <img src={productImage} className='rounded' style={{width:"90%",height:"150px"}}  />
    <div className="description px-2">
    <h1 className='pt-1' style={{fontSize:"15px"}}>
          <b>{productName}</b>
        </h1>
      <p className='par'> Price: ${price}</p>
      <div className="countHandler rounded border px-2 ">
        <button className='btnn' onClick={() => removeFromCart(id)}> - </button>
        <input
        className='ms-1 me-1'
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button className='btnn'  onClick={() => addToCart(id)}> + </button>
      </div>
    </div>
  </div>
  )
}
