import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  totalPrice: 0,
  items: []
}


const cartSlices = createSlice({
  name: 'cart',
  initialState,

  reducers: {

    addItem(state, action) {

      const isPizzaAdd = state.items.find(obj => obj.id === action.payload.id)

      if (isPizzaAdd) {
        isPizzaAdd.count++
      } else {
        state.items.push(action.payload)
        action.payload.count = 1
      }

      state.totalPrice = state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
    },

    minusItemCount(state, action) {
      const countMinus = state.items.find(obj => obj.id === action.payload)

      if (countMinus) {
        countMinus.count--
      }
    },


    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
      console.log(state.items)

    },

    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    }


  }

})



export const selectCart = (state) => state.cart


export const selectCartItem = (id) => (state) => state.cart.items.find(obj => obj.id === id)

export const { addItem, removeItem, clearItems, minusItemCount } = cartSlices.actions


export default cartSlices.reducer