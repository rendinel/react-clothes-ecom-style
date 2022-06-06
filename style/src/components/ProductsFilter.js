import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import { MdArrowDropDown } from 'react-icons/md'
const ProductsFilter = () => {
  return (
    <div className='bg-white'>
      <header>
        <div className='container  mx-auto px-2 py-3'>
          <div className='flex space-x-2 justify-center'>
            <div className='dropdown relative'>
              <select
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
                <option value='volvo'>Volvo</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </div>
            <div className='dropdown relative'>
              <select
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
                <option value='volvo'>Volvo</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
              {/* <ul
                className='
        dropdown-menu
        min-w-max
        absolute
        hidden
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        hidden
        m-0
        bg-clip-padding
        border-none
      '
                aria-labelledby='dropdownMenuButton8'
              >
                <li>
                  <a
                    className='
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          '
                    href='#'
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className='
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          '
                    href='#'
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className='
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          '
                    href='#'
                  >
                    Something else here
                  </a>
                </li>
              </ul> */}
            </div>
            <div className='dropdown relative'>
              <input
                type='text'
                name='text'
                placeholder='search'
                className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none'
              />
            </div>
          </div>
        </div>
      </header>
      <FeaturedProducts />
    </div>
  )
}

export default ProductsFilter
