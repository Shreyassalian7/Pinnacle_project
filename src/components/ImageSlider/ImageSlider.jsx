import React,{ useEffect, useState} from 'react'
import Hero from '../../assets/Hero.jpg'
import Hero1 from '../../assets/Hero1.jpg'
import Hero2 from '../../assets/Hero2.jpg'
import Hero3 from '../../assets/Hero3.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ImageSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(()=>{
      timeOut = autoPlay && setTimeout(()=>{
        nextSlide();
      },2500)
    })

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const slides = [
        {
            url: Hero
        },
        {
            url: Hero1
        },
        {
            url: Hero2
        },
        {
            url: Hero3
        }
    ]
  return (
    <div className='max-w-[1400px] h-[650px] w-full m-auto py-16 px-4 relative group' onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave={() => {setAutoPlay(true)}}>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-200'>
        
      </div>
      {/* left arrow */}
      <div onClick={prevSlide} className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hidden group-hover:block transition-all duration-200'>
        <IoIosArrowBack />
      </div>
      {/* right arrow */}
      <div onClick={nextSlide} className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hidden group-hover:block transition-all duration-300'>
        <IoIosArrowForward />
      </div>
    </div>
  )
}

export default ImageSlider
