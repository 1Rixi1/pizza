import { configureStore } from '@reduxjs/toolkit'

import filter from './slices/filterSlices'
import cart from './slices/cartSlice'
import pizza from './slices/addPizzaSlice'

export const store = configureStore({
  reducer: {
    filterSlice: filter,
    cart,
    pizza
  },
})