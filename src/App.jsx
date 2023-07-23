// import { useState } from 'react'
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from './component/Footer'
import Home from './pages/Home'
import Store from './pages/Store'
import Cart from './pages/Cart'
import Navz from "./component/Nav";
import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';
import './App.css'
import { Storecontextprovider } from "./context/Store-context";

function App() {
  const location = useLocation();
  return (
    <>
    <Storecontextprovider>

    <Navz/>
    <AnimatePresence mode="wait">
       
          
          
          <Routes location={location}
                key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        

    </AnimatePresence>
    <Footer/>
    </Storecontextprovider>
    
       
          
        
        
    </>
  )
}

export default App
