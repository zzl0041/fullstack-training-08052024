import './App.css';

import React, { useState } from 'react';
import {
  addTodo,
  clearCompleted,
  markAllCompleted,
  toggleTodo,
} from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

interface Todo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [markAllDone, setMarkAllDone] = useState<boolean>(false);

  const todos = useSelector((state: Todo[]) => state);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addTodoItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const toggleTodoCompletion = (index: number) => {
    dispatch(toggleTodo(index)); 
  };

  const markAllCompletedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const completed = e.target.checked;
    setMarkAllDone(completed);
    dispatch(markAllCompleted(completed));
  };

  const clearAllCompletedTodos = () => {
    dispatch(clearCompleted()); 
    setMarkAllDone(false);
  };

  const countRemaining = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div className='todo-app'>
      <h1>Todos - ReactJs with Plain Redux</h1>
      <form onSubmit={addTodoItem}>
        <input
          type='text'
          placeholder='Type a todo and hit Enter'
          value={newTodo}
          onChange={handleInputChange}
          className='todo-input'
        />
      </form>

      <div className='todo-info'>
        <p>{countRemaining()} remaining</p>
        <button onClick={clearAllCompletedTodos} className='clear-btn'>
          Clear Completed Todos
        </button>
      </div>

      <div className='mark-all-done'>
        <input
          type='checkbox'
          onChange={markAllCompletedHandler}
          checked={markAllDone}
        />
        <label>&nbsp;Mark All Done</label>
      </div>

      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <li key={index} className='todo-item'>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleTodoCompletion(index)}
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
