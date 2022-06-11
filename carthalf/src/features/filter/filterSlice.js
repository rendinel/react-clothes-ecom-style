import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: JSON.parse(localStorage.getItem('tempCart')),
  amount: 0,
  total: 0,
  shippingFee: 10,
}

const filterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { title, price, category, image, id } = action.payload
      let tempCart = []
      if (tempCart.id) {
        let oldTempCart = JSON.parse(localStorage.getItem('tempCart'))
        let tempItem = oldTempCart.some((item) => item.id === id)
        if (tempItem) {
          tempCart = [...tempCart]
          localStorage.setItem('tempCart', JSON.stringify(tempCart))
        } else {
          tempCart = [
            ...oldTempCart,
            { id, title, price, category, image, amount: 0 },
          ]
          localStorage.setItem('tempCart', JSON.stringify(tempCart))
        }
      } else {
        tempCart = [...tempCart, { id, title, price, category, amount: 0 }]
        localStorage.setItem('tempCart', JSON.stringify(tempCart))
      }
      state.cart = JSON.parse(localStorage.getItem('tempCart'))
    },
  },
})

export const { addToCart } = filterSlice.actions

export default filterSlice.reducer
