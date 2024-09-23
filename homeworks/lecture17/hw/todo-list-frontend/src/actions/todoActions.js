import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch todos
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to load todos"
      );
    }
  }
);

// Add todo
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (title, { rejectWithValue }) => {
    try {
      const response = await axios.post("/add", { title });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add todo"
      );
    }
  }
);

// Delete todo
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/delete/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete todo"
      );
    }
  }
);
