import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div
      className='
       flex
       items-center
       justify-center
       w-screen
       h-screen
     '
    >
      <div className='px-40  py-20 bg-white'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-blue-500 text-9xl'>404</h1>

          <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
            Oops! Page not found
          </h6>

          <p className='mb-8 text-center text-gray-500 md:text-lg'>
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to='/'
            className='text-white
            bg-blue-500
            border-0
            py-2
            px-6
            focus:outline-none
            hover:bg-blue-600
            rounded
            text-lg'
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
