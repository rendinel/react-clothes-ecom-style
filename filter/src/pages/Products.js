import React from 'react'
import { FeaturedProducts } from '../components'
import { useSelector } from 'react-redux'

const Products = () => {
  const { products } = useSelector((state) => state.cart)
  return (
    <div className='bg-white'>
      <FeaturedProducts title='All Products' products={products} />
    </div>
  )
}

export default Products
