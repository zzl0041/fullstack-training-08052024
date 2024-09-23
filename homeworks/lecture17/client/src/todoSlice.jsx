import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:3000/api/todos');
  return response.data;
});

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (todoText) => {
  const response = await axios.post('http://localhost:3000/api/todos', { todo: todoText });
  return response.data;
});

export const toggleTodoStatus = createAsyncThunk('todos/toggleTodoStatus', async (id) => {
  const response = await axios.patch(`http://localhost:3000/api/todos/${id}`);
  return response.data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    markAllCompleted: (state, action) => {
      state.todos.forEach(todo => {
        todo.completed = action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(toggleTodoStatus.fulfilled, (state, action) => {
        const todo = state.todos.find(todo => todo._id === action.payload._id);
        if (todo) {
          todo.completed = action.payload.completed;
        }
      });
  }
});

export const { addTodo, toggleTodo, clearCompletedTodos, markAllCompleted } = todoSlice.actions;

const App = todoSlice.reducer;
export default App;

