import { configureStore } from '@reduxjs/toolkit';
import Nav from './Slice/nav';
export const store = configureStore({
  reducer: {
    nav:Nav
  },
});
