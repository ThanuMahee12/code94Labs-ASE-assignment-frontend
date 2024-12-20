// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/productSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Access the store's dispatch function
export const dispatch = store.dispatch;
