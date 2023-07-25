import React from 'react'
import {motion } from 'framer-motion'
import Transition from '../transition'
import { PRODUCTS } from '../Products'
import { Items } from './Items'



export default function Store() {
  
 

  return (
    <Transition>
      
      <div  className='store-container p-5'>
      <motion.div 
      className="velocity" > 
          <marquee
          style={{fontSize:"22px",fontWeight:"bold",overflow:"hidden"}} className='px-1 mar'
           direction="left"
                 behavior="scroll"
                 loop=""><h1>UNLOCK YOUR SEXYNESS WITH OUR UNIQUE BRAND !</h1></marquee>
      </motion.div>
        <div className="products">
          {PRODUCTS.map ((product) => (
            <Items key={product.id} data = {product} />
          ))}

        </div>
    </div>

    </Transition>
    
  )
}
