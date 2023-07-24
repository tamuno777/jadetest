import { useContext } from 'react'
import React  from 'react'
import { Storecontext } from '../context/Store-context'

export const Items = (props) => {
    const {id,productName,price,productImage} = props.data
    const { addToCart, cartItems } = useContext(Storecontext);
 
    const cartItemCount = cartItems[id];
    return (
    // ui for each product card
    <div className="item-container ">
      <img src={productImage} className='rounded' style={{width:"80%",height:"50%"}} />
      <div className="description">
        <h1 className='pt-1' style={{fontSize:"15px"}}>
          <b>{productName}</b>
        </h1>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn mx-1" onClick={()=> addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  )
}
