import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            checked: false,
          },
        };
      },
    },
    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    uncheckAllTodos(state) {
      state.todos.forEach((todo) => {
        todo.checked = false;
      });
    },
    toggleAllTodos(state, action) {
      state.todos.forEach((todo) => {
        todo.checked = action.payload;
      });
    },
  },
});

export const { addTodo, toggleTodo, uncheckAllTodos, toggleAllTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
