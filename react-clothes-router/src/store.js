import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productReducer from './features/product/singleProductSlice'
import filterReducer from './features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    filter: filterReducer,
  },
})
