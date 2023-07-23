import React from 'react'
import Banner from "../section/Banner"
import Cartegories from "../section/Cartegories"
import Aboutus from "../section/Aboutus"
import Display from "../section/Display"
import Contact from "../section/Contact"
import {motion } from 'framer-motion'
import Transition from '../transition'



export default function Home() {
  return (
    <div  
    
    >
    <Transition>
    <Banner/>
      <Cartegories/>
      <Aboutus/>
      <Display/>
      <Contact/>
    </Transition>
    </div>
  )
}
