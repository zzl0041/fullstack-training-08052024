import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, clearCompleted } from './todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos); // Get todos from state
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearCompleted())}>
        Clear Completed Todos
      </button>
    </div>
  );
};

export default TodoList;
