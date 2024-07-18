import React from 'react'

// import Video from '../assets/instasave.MP4'

export default function Banner() {
  const Videourl = '/video/vid4.mp4'
  return (
    <div className='Banner-container'>
      <div className="overlay">
        <div className="Banner-content">
        <video  preload="metadata" playsInline autoPlay loop muted className='banner-video' style={{width:"100%", height:"71dvh"}}>
          <source src={Videourl} type="video/mp4"/>
        </video>
        </div>
      </div>
    </div>
  )
}
