import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleTypeSearch,
  handleCategorySearch,
  resetFilter,
} from '../features/cart/cartSlice'

const Fillter = () => {
  const { allProducts, searchType, categorySearch } = useSelector(
    (state) => state.cart
  )
  const uniqueCategory = [
    'all',
    ...new Set(allProducts.map((item) => item.category)),
  ]
  const dispatch = useDispatch()
  const handleSearchType = (e) => {
    dispatch(handleTypeSearch({ name: e.target.name, value: e.target.value }))
  }
  const handleSearchCategory = (e) => {
    dispatch(
      handleCategorySearch({ name: e.target.name, value: e.target.value })
    )
  }

  const clearFilter = () => {
    dispatch(resetFilter())
  }

  return (
    <header>
      <div className='container  mx-auto px-2 py-3'>
        <div className='flex space-x-2 justify-center'>
          <div className='dropdown relative'>
            <input
              type='text'
              name='searchType'
              value={searchType}
              onChange={handleSearchType}
              placeholder='search'
              className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none'
            />
          </div>
          <div className='dropdown relative'>
            <label htmlFor='categorySearch'></label>
            <select
              id='categorySearch'
              name='categorySearch'
              value={categorySearch}
              onChange={handleSearchCategory}
              className='
                dropdown-toggle
                px-6
                py-2.5
                bg-blue-500 border-0
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-500 hover:shadow-lg
                focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-500 active:shadow-lg active:text-white
                transition
                duration-150
                ease-in-out
                flex
                items-center
                whitespace-nowrap
                '
            >
              {uniqueCategory.map((cat) => {
                return (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                )
              })}
            </select>
          </div>
          <div className='dropdown relative'>
            <button
              className='         
                  px-6
                  py-2.5
                  bg-blue-500 border-0
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-500 hover:shadow-lg
                  focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-500 active:shadow-lg active:text-white
                  transition
                  duration-150
                  ease-in-out
                  flex
                  items-center
                  whitespace-nowrap'
              onClick={clearFilter}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Fillter
