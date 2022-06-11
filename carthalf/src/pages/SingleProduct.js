import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSingleProduct } from '../features/product/singleProductSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/filter/filterSlice'

const SingleProduct = () => {
  const { id, title, description, price, category, image, isLoading } =
    useSelector((state) => state.product)
  const { productId } = useParams()
  useEffect(() => {
    let tempCart = [
      { id: '', image: '', category: '', title: '', price: '', amount: '' },
    ]
    localStorage.setItem('tempCart', JSON.stringify(tempCart))
  }, [])
  const dispatch = useDispatch()
  const handleAddToCart = (title, price, category, image, id) => {
    dispatch(addToCart({ id, title, price, category, image }))
  }
  useEffect(() => {
    dispatch(getSingleProduct(productId))
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return <h2 className='text-center'>Loading...</h2>
  }
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
              <button
                onClick={() =>
                  handleAddToCart(title, price, category, image, id)
                }
                className='flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded'
              >
                Add to Cart
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
