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

export default cartSlice.reducer
