import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgShirts from '../../assets/BgShirts.jpg'

const Shirts = () => {
  return (
    <div>
      <CategoryPage title="Shirts" bgImage={BgShirts} categories={['Shirts']}/>
    </div>
  )
}

export default Shirts
