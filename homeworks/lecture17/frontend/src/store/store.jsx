import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;