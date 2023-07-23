import React from 'react'
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion'


export default function Contact() {
  return (
    <div 
    className='contact text-white'
    style={{
      position:"relative",
      // top:'-475px',
      overflow:"hidden",
      padding:"40px",

      
    }}
    >
      <motion.div className="contact-content text-center"
       initial={{
        x:-100
      }}
      whileInView={{
        x:1
      }}
      transition={{
        duration:1.3,
        type:"spring",
        damping:20
        
      }}
      >
        <h3>GET IN TOUCH WITH US</h3>
        <h1><small>Let's capture the beauty within</small></h1>
          
      </motion.div>

      <div className='form mt-4'>
          <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" style={{width:"350px"}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} style={{width:"350px"}} />
      </Form.Group>
    </Form>
          </div>
    </div>
  )
}
