import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    nav: 'home',
  },
  reducers: {
    changeRoute: (state, action) => {
      state.nav = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeRoute } = navSlice.actions

export default navSlice.reducer