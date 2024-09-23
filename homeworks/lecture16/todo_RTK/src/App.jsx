import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addTodo,
  toggleComplete,
  markAllComplete,
  clearCompletedTodos,
} from './todoSlice'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  const remainingTodos = todos.filter((todo) => !todo.completed).length

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo))
      setNewTodo('')
    }
  }

  return (
    <div className='todo-app'>
      <h1>Todos - ReactJs with Redux</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Type a todo and hit Enter'
        />
      </form>
      <div className='todo-status'>
        <p>{remainingTodos} remaining</p>
        <button onClick={() => dispatch(clearCompletedTodos())}>
          Clear Completed Todos
        </button>
      </div>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <div key={index} className='todo-item'>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(index))}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
          </div>
        ))}
      </div>
      <div className='todo-actions'>
        <label>
          <input type='checkbox' onChange={() => dispatch(markAllComplete())} />
          Mark All Done
        </label>
      </div>
    </div>
  )
}

export default App
