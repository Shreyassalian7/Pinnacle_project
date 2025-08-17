import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = ({handleScroll}) => {

const [showMenu, setShowMenu] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

const toggleMenu = () => {
    setShowMenu(!showMenu);
};

useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', handleScroll);
}, [])

  return (
    <header className={`bg-orange-100 fixed top-0 left-0 right-0 z-40 ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className='container mx-auto px-10 h-20 flex justify-between items-center'>
            {/* logo */}
            <Link to='/' className='text-4xl text-red-700'>Pi<span className='font-bold uppercase text-blue-600'>nn</span>acle</Link>

            {/* Menu */}
            <ul className='lg:flex text-lg items-center space-x-8 hidden'>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Home</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Services</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>About Us</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Contact</a></li>
            </ul>

            <div className='text-zinc-800 text-2xl flex gap-x-5 justify-center items-center'>
                {/* Input Field */}
                <div className='lg:flex border border-orange-600 rounded-full justify-center items-center hidden'>
                    <input type='text' id="text" placeholder='Search...' className='px-3 focus:outline-none py-2 text-lg' autoComplete='off' onFocus={handleScroll}/>
                    <button className='px-2 size-12 bg-gradient-to-b from-orange-400 to-orange-500 flex justify-center items-center rounded-full m-1 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-600'><FaSearch /></button>
                </div>

                <a href="#" className='hover:text-orange-600 relative'>
                    <GoHeartFill />
                    <span className='absolute text-white bg-red-600 rounded-full w-5 h-5 top-4 right-3 text-[14px] flex justify-center items-center border-2 border-white'>
                        1
                    </span>
                </a>
                <a href="#" className='hover:text-orange-600 relative'>
                    <HiShoppingBag />
                    <span className='absolute text-white bg-red-600 rounded-full w-5 h-5 top-4 right-3 text-[14px] flex justify-center items-center border-2 border-white'>
                        1
                    </span>
                </a>
                <a href="#" className='hover:text-orange-600 text-3xl lg:hidden' onClick={toggleMenu}>
                    {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                </a>

            </div>

            {/* Mobile Menu */}
            <ul className={`flex flex-col gap-y-10 items-center space-x-8 lg:hidden absolute bg-orange-400/40 backdrop-blur-lg rounded-xl top-30 transform -translate-x-1/2 shadow-xl p-8 transition-all duration-500 ${showMenu ? 'left-1/2' : '-left-full'}`}>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Home</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Services</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>About Us</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Contact</a></li>
                <li className='flex border border-orange-600 rounded-full justify-center items-center lg:hidden'>
                    <input type='text' id="text" placeholder='Search...' className='px-3 focus:outline-none py-2 text-lg' autoComplete='off'/>
                    <button className='px-2 size-12 bg-gradient-to-b from-orange-400 to-orange-500 flex justify-center items-center rounded-full m-1 '><FaSearch /></button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
