import React from 'react'
import Heroimg from '../assets/Hero.jpg'
import Button from './Button/Button'
import ImageSlider from './ImageSlider/ImageSlider'

const Hero = () => {
  return (
    <section>
        <div className='container mx-auto px-10 lg:flex-row flex-col flex items-center gap-x-2 min-h-screen lg:-mt-5 mt-30'>
            {/* Hero Content */}
            <div className='w-full lg:w-1/2 flex-1'>
                <span className='text-lg  bg-red-300 px-2 rounded-full py-1 '>Check out our latest collection...</span>
                <h1 className='xl:text-8xl lg:text-7xl/20 text-6xl/18 font-bold mt-2'>Selling the <span className='text-red-600'>Hottest</span> <span className='text-blue-700'>Merchandise</span><br></br> in town</h1>
                <p className='text-zinc-700 mt-3 mb-3 text-2xl'>Style for Every You</p>
                <Button props="Shop Now"/>
            </div>

            {/* Hero Image */}
            <div className='w-full lg:w-1/2 flex-1'>
                {/* <img src={Heroimg} alt="Hero Image"/> */}
                <ImageSlider/>
            </div>
        </div>
    </section>
  )
}

export default Hero
