import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'Learn Redux', completed: false },
  { id: 2, text: 'Build a Todo App', completed: true }
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearCompleted: (state) => {
      return state.filter((todo) => !todo.completed);
    },
  },
});

export const { toggleTodo, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
