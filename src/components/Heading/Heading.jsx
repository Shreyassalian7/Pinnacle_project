import React from 'react'

const Heading = (props) => {
  return (
    <div className='py-10 text-red-700 lg:text-5xl text-4xl font-bold mx-auto w-fit'>
            <span className='text-blue-600'>{props.highlight}</span> {props.heading}
            <div className='lg:w-34 w-20 h-1 bg-blue-600 lg:mt-5 mt-3 ml-auto'></div>
        </div>
  )
}

export default Heading
