import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgShoes from '../../assets/BgShoes.jpg'

const Shoes = () => {
  return (
    <div>
      <CategoryPage title="Shoes" bgImage={BgShoes} categories={['Shoes']}/>
    </div>
  )
}

export default Shoes
