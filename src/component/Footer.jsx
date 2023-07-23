import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <div className='foot-container'>
      <div className="foot-content text-center d-flex justify-content-center">
       <div className='p-3'>
       <p> <span className='span'><AiFillInstagram/></span> Lorem, ipsum.</p>
        <p> <span className='span'><BsFacebook/></span>Lorem, ipsum.</p>
       </div>
        <div className='p-3'>
        <p>  <span className='span'><BsTwitter/></span>Lorem, ipsum.</p>
        <p><span className='span'><HiOutlineMail/></span>Lorem, ipsum.</p>

        </div>
      </div>
    </div>
  )
}
