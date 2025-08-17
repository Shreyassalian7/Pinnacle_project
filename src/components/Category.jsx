import React from 'react'
import Heading from './Heading/Heading'
import Shirts from '../assets/Shirts.jpg'
import Pants from '../assets/Pants.jpg'
import Shoes from '../assets/Shoes.jpg'
import { Link } from 'react-router-dom'

const Category = () => {

  const renderCards = category.map((card) => {
    return(
      <div className='flex-1' key={card.id}>
        {/* card image */}
        <div className='w-full min-h-[50vh] -mb-5 lg:h-64'>
          <img src={card.image} className='w-full h-full object-cover bg-center bg-cover'/>
        </div>

        {/* card content */}
        <div className='bg-zinc-100 pt-10 p-8 rounded-xl flex justify-center flex-col items-center gap-y-4'>
          <h3 className='text-zinc-800 lg:text-3xl md:text-4xl text-3xl font-bold'>{card.title}</h3>
          <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-2 rounded-lg hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg text-white text-xl cursor-pointer'>See All</Link>
        </div>
      </div>
    )
  })

  return (
    <section>
        <Heading highlight="Shop" heading="by Category"/>
        
        {/* Category Cards */}
        <div className='container mx-auto px-10 flex gap-10 mt-5 lg:flex-row flex-col'>
          {renderCards}
        </div>
    </section>
  )
}

export default Category


const category = [
    {
      id: 1,
      title: "Shirts",
      image: Shirts,
      path: "/shirts"
    },
    {
      id: 2,
      title: "Pants",
      image: Pants,
      path: "/pants"
    },
    {
      id: 3,
      title: "Shoes",
      image: Shoes,
      path: "/shoes"
    }
]
