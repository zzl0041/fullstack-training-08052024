import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  // Toggle a todo as completed/uncompleted
  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  const markAllComplete = () => {
    const allCompleted = todos.map((todo) => ({ ...todo, completed: true }))
    setTodos(allCompleted)
  }

  const clearCompletedTodos = () => {
    const remainingTodos = todos.filter((todo) => !todo.completed)
    setTodos(remainingTodos)
  }

  const remainingTodos = todos.filter((todo) => !todo.completed).length

  return (
    <div className='todo-app'>
      <h1>Todos - ReactJs</h1>
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
        <button onClick={clearCompletedTodos}>Clear Completed Todos</button>
      </div>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <div key={index} className='todo-item'>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
          </div>
        ))}
      </div>
      <div className='todo-actions'>
        <label>
          <input type='checkbox' onChange={markAllComplete} />
          Mark All Done
        </label>
      </div>
    </div>
  )
}

export default App
