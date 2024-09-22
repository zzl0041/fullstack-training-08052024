import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'watch react tutorial 1', isDone: false },
  { id: 2, text: 'watch react tutorial 2', isDone: false },
  { id: 3, text: 'watch react tutorial 3', isDone: false },
];
let nextId = 4;

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nextId++,
        text: action.payload,
        isDone: false,
      });
    },

    toggleTodo: (state, action) => {
      state = state.map((todo) =>
        todo.id === action.payload ? (todo.isDone = !todo.isDone) : todo
      );
    },

    toggleAllTodos: (state, action) => {
      state = state.map((todo) => (todo.isDone = true));
    },

    uncheckAllTodos: (state, action) => {
      state = state.map((todo) => (todo.isDone = false));
    },
  },
});

export const { addTodo, toggleTodo, toggleAllTodos, uncheckAllTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
