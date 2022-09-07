import { createSlice } from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    userid: '',
    username: '',
    email: '',
    image: '',
    isAuth: ''
  },
  reducers: {
    login: (state, action) => {
      state.userid = action.payload.id
      state.username = action.payload.username
      state.email = action.payload.email
      state.image = action.payload.image
      state.isAuth = true
      localStorage.setItem('username', JSON.stringify(action.payload))
    },
    logout: (state, action) => {
        state.userid = ''
        state.username = ''
        state.email = ''
        state.image = ''
        state.isAuth = false
        localStorage.removeItem('username')
      }
  },
})

// Action creators are generated for each case reducer function
export const { login,logout } = LoginSlice.actions

export default LoginSlice.reducer