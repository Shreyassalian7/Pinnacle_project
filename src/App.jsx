import React from 'react'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shirts from './components/Shirts/Shirts'
import Pants from './components/Pants/Pants'
import Shoes from './components/Shoes/Shoes'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/shirts',
          element: <Shirts/>
        },
        {
          path: '/pants',
          element: <Pants/>
        },
        {
          path: '/shoes',
          element: <Shoes/>
        },
        {
          path: '/allproducts',
          element: <AllProducts/>
        }
      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default App
