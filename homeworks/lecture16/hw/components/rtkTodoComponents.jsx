import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  toggleAllTodos,
  uncheckAllTodos,
} from '../rtk/features/todoSlice';

export const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

export const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <input
        className='todo-input'
        placeholder='Type a todo and hit Enter'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && input.trim()) {
            dispatch(addTodo(input.trim()));
            setInput('');
          }
        }}
      />
    </>
  );
};

export const Remaining = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const count = todos.filter((todo) => !todo.isDone).length;

  return <p> {count} remaining</p>;
};

export const Btn = ({ btnLabel }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(uncheckAllTodos());
  };
  return <button onClick={handleClick}>{btnLabel}</button>;
};

const Todo = ({ todo, handleChange }) => {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={todo.isDone}
        onChange={() => handleChange(todo.id)}
      />
      <label htmlFor=''>{todo.text}</label>
    </div>
  );
};

export const MarkAllDone = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleAllTodos());
  };

  return (
    <div className='mark-all-done'>
      <input
        type='checkbox'
        checked={todos.every((todo) => todo.isDone)}
        onChange={handleChange}
      />
      <label>Mark All Done</label>
    </div>
  );
};

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleCheckTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className='todos-list'>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleChange={handleCheckTodo}
        />
      ))}
    </div>
  );
};
