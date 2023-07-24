import React from 'react'
import {motion } from 'framer-motion'
import Transition from '../transition'
import { PRODUCTS } from '../Products'
import { Items } from './Items'
// import { useScroll, useTransform } from "framer-motion";

// import { useAnimate, stagger } from "framer-motion"

// import {ParallaxText} from '../section/Velocityanination'


export default function Store() {
  
  // const { scrollYProgress } = useScroll();
  // const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <Transition>
      
      <div  className='store-container p-5'>
      <motion.div 
      // style={{ x }} 
      className="velocity" > 
      {/* <ParallaxText  >
        <h1 style={{fontSize:"12px",fontWeight:"bold"}} className='px-1'>        UNLOCK YOUR SEXYNESS WITH OUR UNIQUE BRAND </h1>
      </ParallaxText> */}
              {/* <motion.h1  > UNLOCK YOUR SEXYNESS WITH OUR UNIQUE BRAND </motion.h1> */}
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
