import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  status: "idle",
};

// Async thunk for fetching todos from the backend
export const fetchTodosAsync = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await fetch("/api/todos");
  return response.json();
});

// Async thunk for creating a new todo
export const createTodoAsync = createAsyncThunk(
  "todo/createTodo",
  async (newTodo) => {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: newTodo }),
    });
    return response.json();
  }
);

// Async thunk for updating (toggling done) a todo
export const updateTodoAsync = createAsyncThunk(
  "todo/updateTodo",
  async (id) => {
    const response = await fetch(`/api/todo/${id}`, {
      method: "PUT",
    });
    return response.json();
  }
);

// Async thunk for deleting a todo
export const deleteTodoAsync = createAsyncThunk(
  "todo/deleteTodo",
  async (id) => {
    const response = await fetch(`/api/todo/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodosAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createTodoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        const todoIndex = state.todos.findIndex(
          (todo) => todo._id === action.payload._id
        );
        state.todos[todoIndex] = action.payload;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload._id);
      });
  },
});

export default todoSlice.reducer;
