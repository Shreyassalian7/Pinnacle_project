import React from 'react'
import Hero from './Hero'
import Category from './Category'
import Products from './Products/Products'
import Discount from './Discount/Discount'
import FAQList from './FAQ/FAQList'


const Home = () => {

  return (
    <div>
      <Hero/>
      <Category/>
      <Products />
      <Discount/>
      <FAQList />
    </div>
  )
}

export default Home
