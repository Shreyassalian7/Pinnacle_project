import React from 'react'

const Button = ({props}) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-2 rounded-lg hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg text-white text-xl cursor-pointer'>
        {props}
    </button>
  )
}

export default Button
