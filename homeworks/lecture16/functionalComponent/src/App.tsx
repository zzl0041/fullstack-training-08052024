import './App.css';

import React, { useReducer, useState } from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

type ActionType =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; index: number }
  | { type: 'MARK_ALL_COMPLETED'; payload: boolean }
  | { type: 'CLEAR_COMPLETED' };


const initialState: Todo[] = [];

const todoReducer = (state: Todo[], action: ActionType): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map((todo, idx) =>
        idx === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case 'MARK_ALL_COMPLETED':
      return state.map((todo) => ({ ...todo, completed: action.payload }));
    case 'CLEAR_COMPLETED':
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const [newTodo, setNewTodo] = useState<string>('');
  const [markAllDone, setMarkAllDone] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  const toggleTodoCompletion = (index: number) => {
    dispatch({ type: 'TOGGLE_TODO', index });
  };

  const markAllCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    const completed = e.target.checked;
    setMarkAllDone(completed);
    dispatch({ type: 'MARK_ALL_COMPLETED', payload: completed });
  };

  const clearAllCompletedTodos = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
    setMarkAllDone(false);
  };

  const countRemaining = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div className='todo-app'>
      <h1>Todos - ReactJs with useReducer</h1>
      <form onSubmit={addTodo}>
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
          onChange={markAllCompleted}
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
