import React, { useState } from 'react';
import './hw3.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Add a new todo item
  const handleAddTodo = () => {
    if (input.trim() === '') return; // Prevent empty todos
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput(''); // Clear the input after adding
  };

  // Toggle todo completion
  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Clear completed todos
  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      {/* Input for adding new todos */}
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      {/* List of todos */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>

      {/* Clear completed todos button */}
      {todos.some((todo) => todo.completed) && (
        <button className="clear-btn" onClick={handleClearCompleted}>
          Clear Completed Todos
        </button>
      )}
    </div>
  );
};

export default TodoList;
