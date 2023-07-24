import React from 'react'
import Button from 'react-bootstrap/Button';
// import logo from '../assets/logo1.svg'
import Navbutton from './Navbutton';
import '../App.css'
import { Link } from 'react-router-dom'
import {BsFillCartPlusFill} from 'react-icons/bs'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navs() {
    
  return (
    <>
      
        <Navbar  className="  nav-container w-100 " >
          <Container fluid className='d-block'> 
           
             
            
              <div  > <h1 className='text-center pt-0 hello '><strong>JADE MINARA</strong></h1></div>

                <Nav className="justify-content-center d-flex flex-grow-1 fs-5  nav-content hello ">

                  <div className='link'  ><Navbutton title="Home" to="/Home" /></div>
                  <div className='link'  ><Navbutton title="Store" to="/Store" /></div>
                  <div className='link'  ><Navbutton title="Cart" to="/Cart" /></div>
                  {/* <Link className='link' to='/cart'><BsFillCartPlusFill size={20}/></Link> */}

                </Nav>

                  
            
          </Container>
        </Navbar>
    
    </>
  );
}

export default Navs;


