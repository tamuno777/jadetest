import React from 'react'
import { Link, useLocation } from "react-router-dom";


export default function Navbutton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  return (
    <Link to={props.to} style={{textDecoration:"none"}} className=' lili'>
        <div className='btnClass  ' >
               
            <p className='btnClass px-4 text-dark' style={{textDecoration:'none',color:'dark',border:'none'}}>          
                <strong>{props.title}</strong>
            
            </p>

        </div>
    </Link>
  )
}

