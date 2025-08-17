import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = ['All', 'Shirts', 'Pants', 'Shoes'];
  const [activeTab, setActiveTab] = useState('All');

  let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab);

  const renderCards = filteredItems.slice(0,8).map(product => {

    return (
      <Cards key={product.id} image={product.image} name={product.name} price={product.price}/>
    )
  })

  return (
    <section>
        <div className='container mx-auto px-10 py-20'>
            <Heading highlight="Our" heading="Products"/>

            {/* Tabs */}
            <div className='flex justify-center gap-x-3 mt-4'>
              {categories.map(category => {
                return (
                  <button key={category} className={`py-2 px-3 rounded-lg text-xl cursor-pointer ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-200'} `} onClick={() => setActiveTab(category)}>
                    {category}
                  </button>
                )
              })}
            </div>

            {/* Products */}
            <div id='product-section' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mt-20'>
              {renderCards}
            </div>

            {/* View All */}
            <div className='flex justify-center mt-10'>
              <Link to="/allproducts" className='bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-2 rounded-lg hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg text-white text-xl cursor-pointer'>View All</Link>
            </div>
        </div>
    </section>
  )
}

export default Products
