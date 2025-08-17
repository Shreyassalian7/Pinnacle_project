import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className='h-[50vh] flex justify-center items-center mt-20 bg-center bg-cover relative' style={{backgroundImage: `url(${bgImage})`}}>
        <div className='text-5xl rounded-xl font-bold text-zinc-800 bg-white p-5 z-10'>
            {title}
        </div>
        <div className='bg-black/50 inset-0 absolute'></div>
    </div>
  )
}

export default Banner
