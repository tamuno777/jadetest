import React from 'react'

// import Video from '../assets/instasave.MP4'

export default function Banner() {
  const Videourl = '/video/vid1.mp4'
  return (
    <div className='Banner-container'>
      <div className="overlay">
        <div className="Banner-content">
        <video  preload="metadata" playsInline autoPlay loop muted className='banner-video'>
          <source src={Videourl} type="video/mp4"/>
        </video>
        </div>
      </div>
    </div>
  )
}
