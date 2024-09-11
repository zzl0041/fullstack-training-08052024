import './TodoList.css';

import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      markAllDone: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = (e) => {
    e.preventDefault();
    if (this.state.newTodo.trim() !== '') {
      const newTodoItem = {
        text: this.state.newTodo,
        completed: false,
      };
      this.setState((prev) => ({
        todos: [...prev.todos, newTodoItem],
        newTodo: '',
      }));
    }
  };

  toggleTodoCompletion = (index) => {
    this.setState((prev) => {
      const updatedTodos = prev.todos.map((todo, idx) =>
        idx === index ? { ...todo, completed: !todo.completed } : todo
      );
      return { todos: updatedTodos };
    });
  };

  markAllCompleted = (e) => {
    const completed = e.target.checked;
    this.setState((prev) => ({
      todos: prev.todos.map((todo) => ({
        ...todo,
        completed: completed,
      })),
      markAllDone: completed,
    }));
  };

  clearAllCompletedTodos = () => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => !todo.completed),
      markAllDone: false,
    }));
  };

  countRemaining = () => {
    return this.state.todos.filter((todo) => !todo.completed).length;
  };

  render() {
    return (
      <div className='todo-app'>
        <h1>Todos - ReactJs</h1>
        <form onSubmit={this.addTodo}>
          <input
            type='text'
            placeholder='Type a todo and hit Enter'
            value={this.state.newTodo}
            onChange={this.handleInputChange}
            className='todo-input'
          />
        </form>

        <div className='todo-info'>
          <p>{this.countRemaining()} remaining</p>
          <button onClick={this.clearAllCompletedTodos} className='clear-btn'>
            Clear Completed Todos
          </button>
        </div>

        <div className='mark-all-done'>
          <input
            type='checkbox'
            onChange={this.markAllCompleted}
            checked={this.state.markAllDone}
          />
          <label>&nbsp;Mark All Done</label>
        </div>

        <ul className='todo-list'>
          {this.state.todos.map((todo, index) => (
            <li key={index} className='todo-item'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => this.toggleTodoCompletion(index)}
              />
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
