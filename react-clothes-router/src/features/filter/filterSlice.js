import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const allCategoriesUrl = 'https://fakestoreapi.com/products/categories'
const singleCategoriesUrl =
  'https://fakestoreapi.com/products/category/jewelery'

const initialState = {
  id: '',
  title: '',
  price: '',
  description: '',
  category: '',
  image: '',
  isLoading: false,
}

export const getAllCategory = createAsyncThunk(
  'cart/getSingleProduct',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(`${allCategoriesUrl}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)

const filterSlice = createSlice({
  name: 'product',
  initialState,
})

export default filterSlice.reducer
