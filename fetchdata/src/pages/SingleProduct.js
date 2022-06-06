import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSingleProduct } from '../features/product/singleProductSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
  const { title, description, price, category, image } = useSelector(
    (state) => state.product
  )
  const { productId } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleProduct(productId))
    // eslint-disable-next-line
  }, [])
  return (
    <section className='text-gray-600 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img
            alt='ecommerce'
            className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
            src={image}
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
              {title}
            </h1>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
              {category}
            </h2>
            <p className='leading-relaxed'>{description}</p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'></div>
            <div className='flex'>
              <span className='title-font font-medium text-2xl text-gray-900'>
                ${price}
              </span>
              <button className='flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded'>
                Button
              </button>
              <Link
                to='/products'
                className='flex  text-white ml-2 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded'
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
