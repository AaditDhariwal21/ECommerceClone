import React from 'react'
import BannerPic from '../assets/products.jpg'

function Banner() {
  return (
    <div className='relative z-20'>
      <div className="w-full h-[50vh] bg-center" style={{ backgroundImage: `url(${BannerPic})` }}>
      </div>
    </div>
  )
}

export default Banner