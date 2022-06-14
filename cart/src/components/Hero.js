import React from 'react'

const Hero = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Before they sold out
            <br className='hidden lg:inline-block' />
            upgrade your wardrobe
          </h1>
          <p className='mb-8 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo
            nulla veritatis sint blanditiis reprehenderit sapiente perferendis
            exercitationem quisquam earum voluptatum quasi iusto nobis accusamus
            non, voluptas temporibus veniam eius.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
              Shop Now
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
