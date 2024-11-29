import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVETHE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='second-btn'>Category</button>
            </div>
            <div className='shoping'>
                <p>Also available here</p>
            </div>
            <div className='brand-icon'>
                <img src="/images/amazon.png" alt="amazon-logo " />
                <img src="/images/flipkart.png" alt="flipkart-logo " />

            </div>
        </div>
        <div >
            <img className='hero-image' src="/images/shoe_image.png" alt="shoe-logo" />
        </div>
    </div>
    

   
  )
}

export default Hero