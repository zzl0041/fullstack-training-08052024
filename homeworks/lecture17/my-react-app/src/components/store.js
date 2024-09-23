import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Assuming you have a todoSlice

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Add your reducers here
  },
});
