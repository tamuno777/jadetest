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
      {['md', ].map((expand) => (
        <Navbar key={expand} expand={expand} className="  nav-container w-100  ">
          <Container fluid>
            {/* <Navbar.Brand className='d-block' >
              

            </Navbar.Brand> */}

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className=" text-light hello"
              // min={true}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{display:"block",paddingTop:"0px",height:"0px"}}>
              <div  > <h1 className='text-center pt-0 hello '><strong>JADE MINARA</strong></h1></div>

                <Nav className="justify-content-center flex-grow-1 fs-5  nav-content hello ">

                  <div className='link'  ><Navbutton title="Home" to="/Home" /></div>
                  <div className='link'  ><Navbutton title="Store" to="/Store" /></div>
                  <div className='link'  ><Navbutton title="Cart" to="/Cart" /></div>
                  {/* <Link className='link' to='/cart'><BsFillCartPlusFill size={20}/></Link> */}

                </Nav>

                  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navs;


