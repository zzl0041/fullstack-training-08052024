import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, updateTodo, deleteTodo, markAllDone, clearCompletedTodos } from '../slices/todoSlice';

function TodoApp() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleUpdateTodo = (id) => {
    dispatch(updateTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkAllDone = () => {
    dispatch(markAllDone());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div>
        <button onClick={handleMarkAllDone}>Mark All as Done</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleUpdateTodo(todo._id)}
            />
            {todo.todo}
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
