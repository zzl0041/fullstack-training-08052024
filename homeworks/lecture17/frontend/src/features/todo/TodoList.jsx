import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
  const { todos } = useSelector((state) => state.todo)

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
