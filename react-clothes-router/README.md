redux
1-we need to install the redux library

npm install @reduxjs/toolkit react-redux

2-we need to set up our store so we create store.js inside src

```js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

3-we need to set up our provider so inside index.js,we wrap the whole app inside the provider and pass the store as a prop in order to access the data in the whole app

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
```

4- then we create src/features/cart/cartslice.js then we import cresteslice function, define our initialstate, invoke the createslice function and pass to it the name and our initialstate and then export our cartSlice reducer

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  amount: 0,
  total: 0,
  shippingFee: 10,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
})

export default cartSlice.reducer
```

5-inside store.js we import the reducer we created and set up as cart inside our reducer

```js
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
```

6-in order to fetch the data from our api we need to install and import axios and the createasyncthunk provided by redux,we define the function to fetch the products getProducts and then we get beack a lifecicle and deal with it inside the extrareducers in order to set up our data inside the products array

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://fakestoreapi.com/products'

const initialState = {
  products: [],
  amount: 0,
  total: 0,
  shippingFee: 10,
  isLoading: true,
}

export const getProducts = createAsyncThunk(
  'cart/getProducts',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false
    },
  },
})
```

7-then inside pages/Products we import use selector and use to access prosucts from our state carts and pass it down to our FeaturedProducts component where we grab the products and map over them in order to display them

```js
import React from 'react'
import { FeaturedProducts } from '../components'
import { useSelector } from 'react-redux'

const Products = () => {
  const { products } = useSelector((state) => state.cart)
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
                {products.map((cat) => {
                  const { category, id } = cat
                  return (
                    <option key={id} value={category}>
                      {category}
                    </option>
                  )
                })}
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
      <FeaturedProducts products={products} />
    </div>
  )
}

export default Products
```

```js
import React from 'react'
import { FeaturedProducts } from '../components'
import { useSelector } from 'react-redux'

const Products = () => {
  const { products } = useSelector((state) => state.cart)
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
                {products.map((cat) => {
                  const { category, id } = cat
                  return (
                    <option key={id} value={category}>
                      {category}
                    </option>
                  )
                })}
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
      <FeaturedProducts products={products} />
    </div>
  )
}

export default Products
```

8-then inside Products.js we define our uniquecategory array from the products array and we map ver it to display in our select

```js
const uniqueCategory = [...new Set(products.map((item) => item.category))]
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
      {uniqueCategory.map((cat) => {
       return (
        <option key={cat} value={cat}>
          {cat}
        </option>
        )
        })}
 </select>
```

9-in the homepage we grab only the first 4 item from products and display them

```js
import { Hero, FeaturedProducts, Contact } from '../components'
import { useSelector } from 'react-redux'

const Home = () => {
  const { products } = useSelector((state) => state.cart)
  const homeProducts = products.slice(0, 4)
  return (
    <main>
      <Hero />
      <FeaturedProducts title products={homeProducts} />
      <Contact />
    </main>
  )
}

export default Home
```

10-we define a new folder and slice product/singleProductslice.js

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const singleProductUrl = 'https://fakestoreapi.com/products'

const initialState = {
  id: '',
  title: '',
  price: '',
  description: '',
  category: '',
  image: '',
  isLoading: false,
}

export const getSingleProduct = createAsyncThunk(
  'cart/getSingleProduct',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.get(`${singleProductUrl}/${productId}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [getSingleProduct.pending]: (state) => {
      state.isLoading = true
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
      state.id = action.payload.id
      state.title = action.payload.title
      state.price = action.payload.price
      state.description = action.payload.description
      state.category = action.payload.category
      state.image = action.payload.image
    },
    [getSingleProduct.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export default productSlice.reducer
```

12-then we import the new reducer inside the store

```js
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productReducer from './features/product/singleProductSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
})
```

13-in featuredproducts where we are mapping products we pass the id inside the to of the link

```js
{
  products.map((product) => {
    const { id, title, category, price, image } = product
    return (
      <Link
        to={`/products/${id}`}
        key={id}
        className='lg:w-1/4 md:w-1/2 p-4 w-full'
      >
        <div className='block relative h-48 rounded overflow-hidden'>
          <img
            alt={title}
            className='object-cover object-center w-full h-full block'
            src={image}
          />
        </div>
        <div className='mt-4'>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
            {category}
          </h3>
          <h2 className='text-gray-900 title-font text-lg font-medium'>
            {title}
          </h2>
          <p className='mt-1'>{price}</p>
        </div>
      </Link>
    )
  })
}
```

14-then inside the singleproduct page we grab what we need from the state and display it, we grab the passed id with the useParams hook and pass this id as a parameter to our getsingleproductfunction to fetch the data dinamically

```js
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSingleProduct } from '../features/product/singleProductSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
  const { id, title, description, price, category, image } = useSelector(
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
```

15-we create a backup of our products inside initial state and we define the reducer that grab the payload name and value from the input and use them to set the searchtype to be equal to what we are typing and then if the searchtype is not empty we set our products to the filtered products that include what we have typed, if state.searchtype is empty it simply set our

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://fakestoreapi.com/products'

const initialState = {
  products: [],
  allProducts: [],
  amount: 0,
  total: 0,
  shippingFee: 10,
  isLoading: true,
  searchType: '',
}

export const getProducts = createAsyncThunk(
  'cart/getProducts',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleTypeSearch: (state, { payload: { name, value } }) => {
      state[name] = value
      if (state.searchType) {
        const filteredProducts = state.products.filter((product) =>
          product.title.toLowerCase().includes(state.searchType.toLowerCase())
        )
        state.products = filteredProducts
      } else {
        state.products = state.allProducts
      }
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
      state.allProducts = action.payload
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export const { handleTypeSearch } = cartSlice.actions

export default cartSlice.reducer
```

16-

```js

```
