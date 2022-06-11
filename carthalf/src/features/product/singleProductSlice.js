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
      state.id = ''
      state.title = ''
      state.price = ''
      state.description = ''
      state.category = ''
      state.image = ''
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.isLoading = false
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
