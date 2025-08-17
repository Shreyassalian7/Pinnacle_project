import React, { useState } from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {

  const handleScroll = () => {
    const section = document.getElementById('product-section');

    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <Navbar handleScroll={handleScroll}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
