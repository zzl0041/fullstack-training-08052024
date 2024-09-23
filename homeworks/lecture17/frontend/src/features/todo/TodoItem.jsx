import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from './todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.title}
      <button onClick={() => dispatch(toggleTodo(todo._id))}>
        {todo.completed ? 'Undo' : 'complete'}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo._id))}>delete</button>
    </li>
  )
}

export default TodoItem
