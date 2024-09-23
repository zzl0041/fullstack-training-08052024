import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, clearCompleted } from './todoSlice';

const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter todo..."
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>

      <button onClick={handleClearCompleted}>Clear Completed Todos</button>
    </div>
  );
};

export default TodoList;
