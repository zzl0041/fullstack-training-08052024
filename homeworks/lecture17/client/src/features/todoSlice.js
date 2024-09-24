import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  todos: [],
  status: 'idle',
};

export const fetchTodosAsync = createAsyncThunk('todo/fetchTodos', async () => {
  const res = await axios.get('http://localhost:3000/api/todos');
  return res.data;
});

export const addTodoAsync = createAsyncThunk('todo/addTodo', async (todo) => {
  const res = await axios.post(`http://localhost:3000/api/todos`, {
    todoItem: todo,
    isComplete: false,
  });
  return res.data;
});

export const updateTodoAsync = createAsyncThunk(
  'todo/updateTodo',
  async (todo) => {
    const res = await axios.put(
      `http://localhost:3000/api/todos/${todo._id}`,
      todo
    );
    return res.data;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  'tood/deleteTodo',
  async (todo) => {
    const res = await axios.delete(
      `http://localhost:3000/api/todos/${todo._id}`
    );
    return todo._id;
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all todos
    builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(fetchTodosAsync.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(fetchTodosAsync.rejected, (state, action) => {
      state.status = 'failed';
    });

    // post a todo
    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.status = 'succeeded';
    });
    builder.addCase(addTodoAsync.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(addTodoAsync.rejected, (state, action) => {
      state.status = 'failed';
    });

    // update todo by id
    builder.addCase(updateTodoAsync.fulfilled, (state, action) => {
      // state.todos = action.payload;
      state.status = 'succeeded';
      const index = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      state.todos[index] = action.payload;
    });
    builder.addCase(updateTodoAsync.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(updateTodoAsync.rejected, (state, action) => {
      state.status = 'failed';
    });

    // delete todo by id
    builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
      // state.todos = action.payload;
      state.status = 'succeeded';
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    });
    builder.addCase(deleteTodoAsync.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(deleteTodoAsync.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export const { fetchTodos } = todoSlice.actions;

export default todoSlice.reducer;
