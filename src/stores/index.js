import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import todoReducer from './todo';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer
  }
});
