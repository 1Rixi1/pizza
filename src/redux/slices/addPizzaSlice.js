import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const addFetchPizzas = createAsyncThunk('addPizzas/pizzaStatus',

  async (params, thunkApi) => {

    const { categoryChange, order, sortChange, search, activePaginatuinCurrent } = params
    const { data } = await axios.get(`https://62cd07e7a43bf78008509237.mockapi.io/items?page=${activePaginatuinCurrent}&limit=4&${categoryChange}&sortBy=${sortChange}&order=${order}&${search}`)

    return data

  }

)

const initialState = {
  pizzaItems: [],
  isLoadingPizza: 'loading',
}


const addPizzaSlice = createSlice({
  name: 'addPizzas',
  initialState,

  reducers: {
    addItemsPizza(state, action) {
      state.pizzaItems = action.payload
    }

  },

  extraReducers: {

    [addFetchPizzas.pending]: (state) => {
      state.pizzaItems = []
      state.isLoadingPizza = 'loading'
    },

    [addFetchPizzas.fulfilled]: (state, action) => {
      state.pizzaItems = action.payload
      state.isLoadingPizza = 'success'
    },

    [addFetchPizzas.rejected]: (state, action) => {
      state.pizzaItems = []
      state.isLoadingPizza = 'error'

    }

  }

})


export const selectPizzas = (state) => state.pizza

export const { addItemsPizza } = addPizzaSlice.actions


export default addPizzaSlice.reducer