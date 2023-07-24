import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'


export default function Aboutus() {
  const Videourl2 = '/video/inst.MP4'
 

  return (
    <div className='about-container py-5'>
      <div className="about-content" style={{
        position:"relative",
        // top:'-500px',
        overflow:"hidden",
        
      }}>
       <motion.header className=' d-flex justify-content-center mb-5'
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
        <h1><strong>ABOUT US </strong></h1>
      </motion.header>
        <Row className='px-5' >
          <Col sm={6} md={6} lg={6} className='hmm p-1 pe-5 ' >
          <video src={Videourl2}playsinline autoPlay loop muted className='about-video border rounded'></video>

          
          </Col>
          <Col sm={6} md={6} lg={6} className='p-5 abt '>
            <h1 className='mb-4 pt-5'>FUN FACT</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi est perferendis hic optio nostrum animi aliquam, maiores asperiores! Placeat, quisquam.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptates odit porro culpa, corrupti, at sunt ratione laboriosam iusto id omnis incidunt iste soluta ab unde, modi magnam laborum voluptatem!</p>
          
          </Col>
        </Row>
      </div>
    </div>
  )
}
