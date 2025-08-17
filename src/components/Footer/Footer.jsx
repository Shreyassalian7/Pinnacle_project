import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='bg-zinc-100 py-20 mt-10'>
        <div className='flex flex-wrap gap-y-12 container mx-auto px-10'>
            <div className='flex-1 basis-[300px]'>
                <a href='#' className='text-4xl text-red-700'>Pi<span className='font-bold uppercase text-blue-600'>nn</span>acle</a>

                <p className='text-zinc-600 mt-5 max-w-[350px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus quas omnis? Vitae consequuntur et maiores magnam
                </p>

                <p className='text-zinc-800 mt-5'>
                    2025 &copy; All rights reserved
                </p>
            </div>

            
            <ul className='flex-1'>
                <li>
                    <h4 className='text-zinc-800 font-bold text-2xl'>Content</h4>
                </li>
                <li className='mt-5'>
                    <a href="" className='text-zinc-800 hover:text-orange-600'>About</a>
                </li>
                <li className='mt-5'>
                    <a href="" className='text-zinc-800 hover:text-orange-600'>FAQ</a>
                </li>
            </ul>


            <ul className='flex-1'>
                <li>
                    <h4 className='text-zinc-800 font-bold text-2xl'>Support</h4>
                </li>
                <li className='mt-5'>
                    <a href="" className='text-zinc-800 hover:text-orange-600'>Support Center</a>
                </li>
                <li className='mt-5'>
                    <a href="" className='text-zinc-800 hover:text-orange-600'>Feedback</a>
                </li>
                <li className='mt-5'>
                    <a href="" className='text-zinc-800 hover:text-orange-600'>Contact Us</a>
                </li>
            </ul>


            <div className='flex-1'>
                <h4 className='text-zinc-800 font-bold text-2xl'>Stay Connected</h4>

                <p className='text-zinc-800 mt-5'>Question or feedback?<br />
                    We'd love to hear from you
                </p>

                <div className='flex bg-white p-1 rounded-lg mt-5 border border-zinc-300'>
                    <input type="email" name="email" id="email" placeholder='Email Address' autoComplete='off' className='h-[5vh] flex-1 pl-4 focus:outline-none'/>
                    <button className='text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg'>
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
