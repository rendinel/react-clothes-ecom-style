import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productReducer from './features/product/singleProductSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
})
