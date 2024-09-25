import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    markAll: false
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      state.todos[action.payload].completed = !state.todos[action.payload].completed;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
      state.markAll = false;
    },
    markAll: (state, action) => {
      state.markAll = action.payload;
      state.todos.forEach((todo) => {
        todo.completed = action.payload;
      });
    },
  }
});

export const { addTodo, toggleTodo, clearCompleted, markAll } = todoSlice.actions;
export default todoSlice.reducer;
