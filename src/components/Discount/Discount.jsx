import React from 'react'
import Button from '../Button/Button'
import DiscountImage from '../../assets/DiscountImage.png'


const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url(${DiscountImage})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col container mx-auto px-10 py-10'>
            <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 md:self-center'>20%</span>
            <div className='max-w-[700px]'>
                <h3 className='md:text-7xl text-5xl text-zinc-800 font-bold'>First Order Discount!</h3>
                <p className='text-zinc-600 my-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolorem rerum nisi quo vel minus, dolor impedit quam veniam mollitia dicta sapiente quia accusantium dolorum nihil similique cumque, aliquid deleniti!</p>
                <Button props="Get a Discount"/>
            </div>   
            </div>
    </section>
  )
}

export default Discount
