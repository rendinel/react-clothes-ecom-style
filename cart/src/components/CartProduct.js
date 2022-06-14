import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { removeItem, plus, minus } from '../features/filter/filterSlice'
import { useDispatch } from 'react-redux'
const CartProduct = ({ cart }) => {
  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }
  const handlePlus = ({ id, title, price, category, image }) => {
    dispatch(plus({ id, title, price, category, image }))
  }
  const handleMinus = ({ id, title, price, category, image }) => {
    dispatch(minus({ id, title, price, category, image }))
  }
  return (
    <>
      <div className='flex mt-10 mb-5'>
        <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
          Product Details
        </h3>
        <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
          Quantity
        </h3>
        <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
          Price
        </h3>
        <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
          Total
        </h3>
      </div>
      {cart.map((item) => {
        const { id, title, price, category, image, amount, totalPrice } = item
        return (
          <div
            key={id}
            className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'
          >
            <div className='flex w-2/5'>
              <div className='w-20'>
                <img className='h-24' src={image} alt={title} />
              </div>
              <div className='flex flex-col justify-between ml-4 flex-grow'>
                <span className='font-bold text-sm'>{title}</span>
                <span className='text-blue-500 text-xs'>{category}</span>
                <div
                  onClick={() => handleRemove(id)}
                  className='font-semibold hover:text-red-500 cursor-pointer text-gray-500 text-xs'
                >
                  Remove
                </div>
              </div>
            </div>
            <div className=' flex justify-center w-1/5'>
              <AiOutlineMinus
                onClick={() =>
                  handleMinus({ id, title, price, category, image })
                }
                className='fill-current mt-1 text-gray-600 w-3 hover: cursor-pointer'
              />

              <span className='mx-2 border text-center w-8'>{amount}</span>

              <AiOutlinePlus
                onClick={() =>
                  handlePlus({ id, title, price, category, image })
                }
                className='fill-current text-gray-600 mt-1 w-3 hover: cursor-pointer'
              />
            </div>
            <span className='text-center w-1/5 font-semibold text-sm'>
              ${price.toFixed(2)}
            </span>
            <span className='text-center w-1/5 font-semibold text-sm'>
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        )
      })}
    </>
  )
}

export default CartProduct
