import React from 'react'
import { Link } from 'react-router-dom'
import Fillter from './Fillter'

const FeaturedProducts = ({ home, title, products }) => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container  px-5 py-24 mx-auto'>
        {title ? (
          <h2
            className='text-center title-font sm:text-3xl text-2xl mb-8 font-medium text-gray-900
        '
          >
            {title}
          </h2>
        ) : (
          ''
        )}
        {!home ? <Fillter /> : ''}
        <div className='flex flex-wrap -m-4'>
          {products.map((product) => {
            const { id, title, category, price, image } = product
            return (
              <Link
                to={`/products/${id}`}
                key={id}
                className='lg:w-1/4 md:w-1/2 p-4 w-full'
              >
                <div className='block relative h-48 rounded overflow-hidden'>
                  <img
                    alt={title}
                    className='object-cover object-center w-full h-full block'
                    src={image}
                  />
                </div>
                <div className='mt-4'>
                  <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                    {category}
                  </h3>
                  <h2 className='text-gray-900 title-font text-lg font-medium'>
                    {title}
                  </h2>
                  <p className='mt-1'>{price}</p>
                </div>
              </Link>
            )
          })}
          <Link
            to='/products'
            className={`inline-flex mt-8 mx-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ${
              home ? '' : 'hidden'
            }`}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
