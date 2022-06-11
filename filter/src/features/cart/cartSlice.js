import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://fakestoreapi.com/products'

const initialFetchState = {
  products: [],
}

const initialState = {
  products: [],
  allProducts: [],
  amount: 0,
  total: 0,
  shippingFee: 10,
  isLoading: true,
  searchType: '',
  categorySearch: '',
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
        state.categorySearch = 'all'
      }
    },
    handleCategorySearch: (state, { payload: { name, value } }) => {
      state[name] = value
      if (state.categorySearch === 'all') {
        state.products = state.allProducts
      }
      if (state.categorySearch) {
        state.products = state.allProducts
        const filteredProductsDos = state.products.filter(
          (product) =>
            product.category.toLowerCase() ===
            state.categorySearch.toLowerCase()
        )
        state.products = filteredProductsDos
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

export const { handleTypeSearch, handleCategorySearch } = cartSlice.actions

export default cartSlice.reducer
