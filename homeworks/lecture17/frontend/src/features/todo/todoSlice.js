import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  loading: false,
  error: null,
}

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  const response = await fetch('/api/todos')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data
})

export const addTodo = createAsyncThunk('todo/addTodo', async (title) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data
})

export const toggleTodo = createAsyncThunk('todo/toggleTodo', async (id) => {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data
})

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id) => {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return id
})

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload)
      })

      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo._id === action.payload._id
        )
        if (index !== -1) {
          state.todos[index] = action.payload
        }
      })

      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload)
      })
  },
})

export default todoSlice.reducer
