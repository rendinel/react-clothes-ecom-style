import React from 'react'
import { FeaturedProducts } from '../components'
import { useSelector } from 'react-redux'

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.cart)
  if (isLoading) {
    return <h2 className='text-center'>Loading...</h2>
  }
  if (!isLoading) {
    return (
      <div className='bg-white'>
        <FeaturedProducts title='All Products' products={products} />
      </div>
    )
  }
}

export default Products
