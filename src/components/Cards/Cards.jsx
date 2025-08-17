import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Button from '../Button/Button';

const Cards = ({image, name, price}) => {

  const [active, setActive] = useState(false);

  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
    {/* Card Icons */}
      <div className='flex justify-between pb-3'>
        <div className='text-3xl'>
          <button onClick={() => setActive(!active)} className={`${active? 'text-red-600' : 'text-zinc-300'} cursor-pointer`}>
            <FaHeart />
            
          </button>
            
        </div>
        <div className='text-xl rounded-lg px-4 py-3 bg-gradient-to-b from-orange-400 to-orange-500 text-white'>
            <FaPlus />
        </div>
      </div>

    {/* Card Image */}
      <div className='w-full h-80 bg-red-300 overflow-hidden'>
        <img src={image} className='w-full h-full object-cover object-center'/>
      </div>

    {/* Card Content */}
      <div className='text-center'>
        <h3 className='text-2xl font-semibold mt-5'>{name}</h3>
        <p className='text-2xl font-bold py-4'>Rs {price.toFixed(2)}</p>
        <Button props="Shop Now"/>
      </div>
    </div>
  )
}

export default Cards
