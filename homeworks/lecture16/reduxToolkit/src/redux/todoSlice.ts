import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Todo {
  text: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    markAllCompleted: (state, action: PayloadAction<boolean>) => {
      state.forEach((todo) => {
        todo.completed = action.payload;
      });
    },
    clearCompleted: (state) => {
      return state.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, markAllCompleted, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
