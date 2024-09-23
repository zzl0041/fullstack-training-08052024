import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addTodo,
  toggleTodo,
  markAllComplete,
  clearCompleted,
} from './redux/todosReducer'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const todos = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo))
      setNewTodo('')
    }
  }

  const remainingTodos = todos.filter((todo) => !todo.completed).length

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
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed Todos
        </button>
      </div>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <div key={index} className='todo-item'>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(index))}
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
