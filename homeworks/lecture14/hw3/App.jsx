import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: '',
    }
  }

  handleAddTodo = (e) => {
    e.preventDefault()
    const { newTodo, todos } = this.state
    if (newTodo.trim()) {
      this.setState({
        todos: [...todos, { text: newTodo, completed: false }],
        newTodo: '',
      })
    }
  }

  toggleComplete = (index) => {
    const updatedTodos = this.state.todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    )
    this.setState({ todos: updatedTodos })
  }

  markAllComplete = () => {
    const allCompleted = this.state.todos.map((todo) => ({
      ...todo,
      completed: true,
    }))
    this.setState({ todos: allCompleted })
  }

  clearCompletedTodos = () => {
    const remainingTodos = this.state.todos.filter((todo) => !todo.completed)
    this.setState({ todos: remainingTodos })
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value })
  }

  render() {
    const { todos, newTodo } = this.state
    const remainingTodos = todos.filter((todo) => !todo.completed).length

    return (
      <div className='todo-app'>
        <h1>Todos - ReactJs</h1>
        <form onSubmit={this.handleAddTodo}>
          <input
            type='text'
            value={newTodo}
            onChange={this.handleInputChange}
            placeholder='Type a todo and hit Enter'
          />
        </form>
        <div className='todo-status'>
          <p>{remainingTodos} remaining</p>
          <button onClick={this.clearCompletedTodos}>
            Clear Completed Todos
          </button>
        </div>
        <div className='todo-list'>
          {todos.map((todo, index) => (
            <div key={index} className='todo-item'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => this.toggleComplete(index)}
              />
              <span className={todo.completed ? 'completed' : ''}>
                {todo.text}
              </span>
            </div>
          ))}
        </div>
        <div className='todo-actions'>
          <label>
            <input type='checkbox' onChange={this.markAllComplete} />
            Mark All Done
          </label>
        </div>
      </div>
    )
  }
}

export default App
