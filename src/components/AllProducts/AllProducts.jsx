import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import Hero from '../../assets/Hero.jpg'

const AllProducts = () => {
  return (
    <div>
      <CategoryPage title="All Products" bgImage={Hero} categories={['All']}/>
    </div>
  )
}

export default AllProducts
