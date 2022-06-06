import React from 'react'

const FeaturedProducts = ({ title }) => {
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
        <div className='flex flex-wrap -m-4'>
          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='block relative h-48 rounded overflow-hidden'>
              <img
                alt='ecommerce'
                className='object-cover object-center w-full h-full block'
                src='https://dummyimage.com/420x260'
              />
            </div>
            <div className='mt-4'>
              <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                The Catalyzer
              </h2>
              <p className='mt-1'>$16.00</p>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='block relative h-48 rounded overflow-hidden'>
              <img
                alt='ecommerce'
                className='object-cover object-center w-full h-full block'
                src='https://dummyimage.com/421x261'
              />
            </div>
            <div className='mt-4'>
              <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                Shooting Stars
              </h2>
              <p className='mt-1'>$21.15</p>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='block relative h-48 rounded overflow-hidden'>
              <img
                alt='ecommerce'
                className='object-cover object-center w-full h-full block'
                src='https://dummyimage.com/422x262'
              />
            </div>
            <div className='mt-4'>
              <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                Neptune
              </h2>
              <p className='mt-1'>$12.00</p>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='block relative h-48 rounded overflow-hidden'>
              <img
                alt='ecommerce'
                className='object-cover object-center w-full h-full block'
                src='https://dummyimage.com/423x263'
              />
            </div>
            <div className='mt-4'>
              <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                The 400 Blows
              </h2>
              <p className='mt-1'>$18.40</p>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='block relative h-48 rounded overflow-hidden'>
              <img
                alt='ecommerce'
                className='object-cover object-center w-full h-full block'
                src='https://dummyimage.com/424x264'
              />
            </div>
            <div className='mt-4'>
              <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                The Catalyzer
              </h2>
              <p className='mt-1'>$16.00</p>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='block relative h-48 rounded overflow-hidden'>
              <img
                alt='ecommerce'
                className='object-cover object-center w-full h-full block'
                src='https://dummyimage.com/425x265'
              />
            </div>
            <div className='mt-4'>
              <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                Shooting Stars
              </h2>
              <p className='mt-1'>$21.15</p>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='block relative h-48 rounded overflow-hidden'>
              <img
                alt='ecommerce'
                className='object-cover object-center w-full h-full block'
                src='https://dummyimage.com/427x267'
              />
            </div>
            <div className='mt-4'>
              <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                Neptune
              </h2>
              <p className='mt-1'>$12.00</p>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='block relative h-48 rounded overflow-hidden'>
              <img
                alt='ecommerce'
                className='object-cover object-center w-full h-full block'
                src='https://dummyimage.com/428x268'
              />
            </div>
            <div className='mt-4'>
              <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                The 400 Blows
              </h2>
              <p className='mt-1'>$18.40</p>
            </div>
          </div>
          <button
            className={`inline-flex mt-8 mx-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ${
              title ? '' : 'hidden'
            }`}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
