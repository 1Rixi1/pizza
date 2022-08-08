import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  searchValue: '',
  activePaginatuinCurrent: 1,
  sort: {
    name: 'популярности',
    sortType: 'rating'
  }
}


const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {

    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setPaginationCurrent(state, action) {
      state.activePaginatuinCurrent = action.payload
    },
    setParamsFilter(state, action) {
      state.sort = action.payload.SortArrFilterToObject
      state.activePaginatuinCurrent = Number(action.payload.activePaginatuinCurrent)
      state.categoryId = Number(action.payload.categoryId)
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    }

  }
})


export const selectfilter = (state) => state.filterSlice
export const selectSort = (state) => state.filterSlice.sort;

export const { setCategoryId, setSort, setPaginationCurrent, setParamsFilter, setSearchValue } = filterSlice.actions


export default filterSlice.reducer