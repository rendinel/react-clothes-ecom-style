import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineLogin } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { totalItems } = useSelector((state) => state.filter)
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
          <img src={logo} alt='logo' className='w-10 h-10' />
          <span className='ml-3 text-xl'>React Clothes</span>
        </div>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mr-5 text-blue-500' : 'text-gray-500 mr-5'
            }
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'mr-5 text-blue-500' : 'text-gray-500 mr-5'
            }
            to='/products'
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'mr-5 text-blue-500 relative'
                : 'text-gray-500 mr-5 relative'
            }
            to='/cart'
          >
            Cart
            <div className='div  h-3.5 w-3.5 rounded-full absolute top-0 left-8 flex justify-center items-center'>
              {totalItems}
            </div>
          </NavLink>
        </nav>
        <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ml-4 mt-4 md:mt-0'>
          Login
          <AiOutlineLogin className='w-4 h-4 ml-1' />
        </button>
      </div>
    </header>
  )
}

export default Navbar
