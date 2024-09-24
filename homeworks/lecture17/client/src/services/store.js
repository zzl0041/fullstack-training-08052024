import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './../features/todoSlice';

const store = configureStore({
  reducer: {
    todoslice: todosReducer,
  },
});

export default store;
