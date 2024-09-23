import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false })
    },
    toggleComplete: (state, action) => {
      const todo = state.todos[action.payload]
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    markAllComplete: (state) => {
      state.todos.forEach((todo) => {
        todo.completed = true
      })
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed)
    },
  },
})

export const { addTodo, toggleComplete, markAllComplete, clearCompletedTodos } =
  todoSlice.actions

export default todoSlice.reducer
