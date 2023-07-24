import React from 'react'

// import Video from '../assets/instasave.MP4'

export default function Banner() {
  const Videourl = '/video/instasave1.MP4'
  return (
    <div className='Banner-container'>
      <div className="overlay">
        <div className="Banner-content">
        <video src={Videourl} autoPlay loop muted className='banner-video'></video>
        </div>
      </div>
    </div>
  )
}
