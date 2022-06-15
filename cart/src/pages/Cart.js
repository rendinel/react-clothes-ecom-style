import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CartProduct } from '../components'
import { clearCart, calculateTotal } from '../features/filter/filterSlice'

const Cart = () => {
  const { cart, totalAmount, shippingFee, totalItems } = useSelector(
    (state) => state.filter
  )
  const dispatch = useDispatch()
  const cleanCart = () => {
    dispatch(clearCart())
  }
  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  //   dispatch(calculateTotal())
  // }, [cart])
  return (
    <div className='container mx-auto mt-10'>
      <div className='flex  my-10'>
        <div className='w-3/4 bg-white px-10 py-10'>
          <div className='flex justify-between border-b pb-8'>
            <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
            <h2 className='font-semibold text-2xl'>3 Items</h2>
          </div>
          {cart.length === 0 ? (
            <h2 className='text-center'>Your cart is empty</h2>
          ) : (
            <CartProduct cart={cart} />
          )}
          <div className='flex font-semibold text-blue-500 text-sm mt-10'>
            <svg
              className='fill-current mr-2 text-blue-500 w-4'
              viewBox='0 0 448 512'
            >
              <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
            </svg>
            Continue Shopping
          </div>
        </div>

        <div id='summary' className='w-1/4 px-8 py-10'>
          <h1 className='font-semibold text-2xl border-b pb-8'>
            Order Summary
          </h1>
          <div className='flex justify-between mt-10 mb-5'>
            <span className='font-semibold text-sm uppercase'>
              N. Items {totalItems}
            </span>
            <span className='font-semibold text-sm'>
              ${totalAmount.toFixed(2)}
            </span>
          </div>
          <div>
            <label className='font-medium inline-block mb-3 text-sm uppercase'>
              Shipping
            </label>
            <select className='block p-2 text-gray-600 w-full text-sm'>
              <option>Standard shipping - ${shippingFee}</option>
            </select>
          </div>
          <div className='border-t mt-8'>
            <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
              <span>Total cost</span>
              <span>${(shippingFee + totalAmount).toFixed(2)}</span>
            </div>
            <button className='bg-blue-500 rounded  focus:outline-none hover:bg-blue-600  border-0 py-2 px-6 text-lg text-white uppercase w-full'>
              Checkout
            </button>
            <button
              onClick={cleanCart}
              className='bg-blue-900 rounded mt-4  focus:outline-none hover:bg-blue-600  border-0 py-2 px-6 text-lg text-white uppercase w-full'
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
