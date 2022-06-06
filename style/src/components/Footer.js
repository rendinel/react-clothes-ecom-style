import React from 'react'
import logo from '../assets/logo.png'
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
          <img src={logo} className='w-10 h-10' />
          <span className='ml-3 text-xl'>React Clothes</span>
        </a>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © {new Date().getFullYear()} React Clothes
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a className='text-gray-500'>
            <AiFillFacebook className='w-5 h-5' />
          </a>
          <a className='ml-3 text-gray-500'>
            <AiFillTwitterCircle className='w-5 h-5' />
          </a>
          <a className='ml-3 text-gray-500'>
            <AiFillInstagram className='w-5 h-5' />
          </a>
          <a className='ml-3 text-gray-500'>
            <AiFillLinkedin className='w-5 h-5' />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
