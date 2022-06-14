import { createSlice } from '@reduxjs/toolkit'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  totalAmount: 0,
  totalItems: 0,
  shippingFee: 10,
}

const filterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, { payload: { id, title, price, category, image } }) => {
      const tempItem = state.cart.find((item) => item.id === id)
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            let newAmount = cartItem.amount + 1
            return {
              ...cartItem,
              amount: newAmount,
              totalPrice: newAmount * price,
            }
          } else {
            return { ...cartItem }
          }
        })
        state.cart = tempCart
      } else {
        state.cart = [
          ...state.cart,
          {
            id,
            title,
            price,
            category,
            image,
            amount: 1,
            totalPrice: price * 1,
          },
        ]
      }
    },
    clearCart: (state) => {
      state.cart = []
    },
    removeItem: (state, { payload: id }) => {
      const removeCart = state.cart.filter((item) => item.id !== id)
      state.cart = removeCart
    },
    plus: (state, { payload: { id, title, price, category, image } }) => {
      const tempItem = state.cart.find((item) => item.id === id)
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            let newAmount = cartItem.amount + 1
            return {
              ...cartItem,
              amount: newAmount,
              totalPrice: newAmount * price,
            }
          } else {
            return { ...cartItem }
          }
        })
        state.cart = tempCart
      }
    },
    minus: (state, { payload: { id, title, price, category, image } }) => {
      const tempItem = state.cart.find((item) => item.id === id)
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            let newAmount = cartItem.amount - 1
            if (newAmount < 1) {
              return {
                ...cartItem,
                amount: 1,
                totalPrice: price,
              }
            } else {
              return {
                ...cartItem,
                amount: newAmount,
                totalPrice: newAmount * price,
              }
            }
          } else {
            return { ...cartItem }
          }
        })
        state.cart = tempCart
      }
    },
    calculateTotal: (state, action) => {
      const { totalAmount, totalItems } = state.cart.reduce(
        (total, cartItem) => {
          const { totalPrice, amount } = cartItem
          total.totalItems += amount
          total.totalAmount += totalPrice
          return total
        },
        {
          totalAmount: 0,
          totalItems: 0,
        }
      )
      state.totalAmount = totalAmount
      state.totalItems = totalItems
    },
  },
})

export const { addToCart, clearCart, removeItem, plus, minus, calculateTotal } =
  filterSlice.actions

export default filterSlice.reducer
