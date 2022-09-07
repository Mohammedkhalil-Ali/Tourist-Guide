import { configureStore } from '@reduxjs/toolkit';
import Nav from './Slice/nav';
import Login from './Slice/login';
export const store = configureStore({
  reducer: {
    nav:Nav,
    login:Login
  },
});
