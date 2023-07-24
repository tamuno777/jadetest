import React from 'react'
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'

export default function Display() {

  let {scrollYProgress} = useScroll();
  let y = useTransform( scrollYProgress, [0,1], ["0%","100%"])
 const [width ,setwidth] = useState(0);
 const Carousel = useRef(null);
 useEffect(() => {
   
   setwidth(Carousel.current.scrollWidth - Carousel.current.offsetWith)
 
   
 }, [])

  const Videourl3 = '/video/instasave.MP4'
  const Videourl4 = '/video/inst.MP4'
  const picurl1 = '/assets/mod1.avif'
  const picurl2 = '/assets/mode4.avif'
  const picurl3 = '/assets/mode3.avif'
  const picurl4 = '/assets/mode2.avif'
  return (
    <div className='display-container py-3'
    style={{
      position:"relative",
      // top:'-450px',
      // overflow:"hidden",
      
    }}>

<motion.header className=' d-flex justify-content-center py-3'
       initial={{
        y:-100
      }}
      whileInView={{
        y:1
      }}
      transition={{
        duration:1.3,
        type:"spring",
        damping:20
        
      }}
       >
        <h1><strong>BEAUTY FROM WITHIN</strong></h1>
      </motion.header>
       < >
        <motion.div ref={Carousel}
       
        
        className='carousel my-4 h-100 w-100' >
          <motion.div className="first-set inner-carousel d-flex justify-content-center ms-5"
          
           drag= "x"
           
           draggable

            dragConstraints={{right:0 ,left:-140}}
           
            transition={{
              type:"tween",
              damping:20,
              stiffness:150,
              
              
            }}
          >
            <motion.video src={Videourl3} playsinline autoPlay loop muted draggable className='display-video '></motion.video>
            <motion.img src={picurl2} alt="" draggable className='display-video ' />
            <motion.video src={Videourl4} playsinline autoPlay loop muted draggable className='display-video '></motion.video>

            <motion.img src={picurl1} alt="" draggable className='display-video ' />
            <motion.video src={Videourl3} playsinline autoPlay loop muted draggable className='display-video '></motion.video>
            <motion.img src={picurl3} alt="" draggable className='display-video  ' />

            
            


          </motion.div>

        </motion.div>
    
      </>
    </div>
  )
}
