import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({title, bgImage, categories=[]}) => {

    let filteredItems = categories.includes('All') ? ProductList : ProductList.filter(item => categories.includes(item.category));

    const renderProducts = filteredItems.map(product => {
        return (
            <Cards key={product.id} image={product.image} name={product.name} price={product.price}/>
        )
    })


  return (
    <div>
        <div>
            <Banner title={title} bgImage={bgImage}/>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 container mx-auto px-10 py-20'>
            {renderProducts}
        </div>
    </div>
  )
}

export default CategoryPage
