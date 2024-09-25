import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  todos: [],
  loading: false,
  error: null,
  success: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodosStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    fetchTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodoSuccess: (state, action) => {
      state.todos.push(action.payload);
      state.loading = false;
      state.success = "Todo added successfully";
    },
    updateTodoSuccess: (state, action) => {
      const index = state.todos.findIndex((todo) => todo._id === action.payload._id);
      state.todos[index] = action.payload;
      state.success = "Todo updated successfully";
    },
    deleteTodoSuccess: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      state.success = "Todo deleted successfully";
    },
    markAllDoneSuccess: (state) => {
      state.todos.forEach(todo => (todo.done = true));
    },
    clearCompletedSuccess: (state) => {
      state.todos = state.todos.filter(todo => !todo.done);
    },
  },
});

export const {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoSuccess,
  updateTodoSuccess,
  deleteTodoSuccess,
  markAllDoneSuccess,
  clearCompletedSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosStart());
  try {
    const response = await axios.get('http://localhost:3000/api/todos');
    dispatch(fetchTodosSuccess(response.data));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/api/todos', { todo });
    dispatch(addTodoSuccess(response.data));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};

export const updateTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3000/api/todos/${id}`);
    dispatch(updateTodoSuccess(response.data));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/todos/${id}`);
    dispatch(deleteTodoSuccess(id));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};

export const markAllDone = () => async (dispatch) => {
  try {
    await axios.put('http://localhost:3000/api/todos/mark-all-done');
    dispatch(markAllDoneSuccess());
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};

export const clearCompletedTodos = () => async (dispatch) => {
  try {
    await axios.delete('http://localhost:3000/api/todos/clear-completed');
    dispatch(clearCompletedSuccess());
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};
