import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgPants from '../../assets/BgPants.jpg'

const Pants = () => {
  return (
    <div>
      <CategoryPage title={"Pants"} bgImage={BgPants} categories={['Pants']}/>
    </div>
  )
}

export default Pants
