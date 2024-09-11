import React from 'react';
import { useState } from 'react';
import './styles.css';

function AddSth({ onSthAdd }) {
  const [input, setInput] = useState('');
  return (
    <>
      <input
        className='todo-input'
        placeholder='Type a todo and hit Enter'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (input !== '') {
              onSthAdd(input);
              setInput('');
            }
          }
        }}
      />
    </>
  );
}

function Title() {
  return <h1 className='hw-1-title'>Todos - React JS</h1>;
}

function Remaining({ count }) {
  return <div>{count} remaining</div>;
}

function ClearAllBtn({ btnLabel, handleClick }) {
  return <button onClick={handleClick}>{btnLabel}</button>;
}

function MarkAllDone({ areAllDone, handleChange }) {
  return (
    <div className='mark-all-done'>
      <input
        type='checkbox'
        checked={areAllDone}
        onChange={handleChange}
      />
      <label>Mark All Done</label>
    </div>
  );
}

function Todo({ todo, idx, handleChange }) {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={todo.isDone}
        onChange={() => handleChange(idx)}
      />
      <label htmlFor=''>{todo.todo}</label>
    </div>
  );
}

function Todos({ todos, handleChange }) {
  return (
    <div className='todos-list'>
      {todos.map((todo, idx) => (
        <Todo
          key={idx}
          todo={todo}
          idx={idx}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default function HW1() {
  const [todos, setTodos] = useState(initialTodos);
  function handleAddTodo(todoText) {
    // console.log(`todoText: ${todoText}`);
    setTodos([
      ...todos,
      {
        todo: todoText,
        isDone: false,
      },
    ]);
  }

  function handleCheckTodo(idx) {
    let temp = [...todos];
    temp[idx].isDone = !temp[idx].isDone;
    setTodos(temp);
  }

  function handleMarkAllDone() {
    setTodos(todos.map((todo) => ({ ...todo, isDone: true })));
  }

  function handleClearCompletedTodos() {
    setTodos(todos.map((todo) => ({ ...todo, isDone: false })));
  }

  return (
    <div className='hw-1'>
      <Title />
      <AddSth onSthAdd={handleAddTodo} />
      <div className='remaining-and-clear-all-completed-todos'>
        <Remaining count={todos.filter((e) => !e.isDone).length} />
        <ClearAllBtn
          btnLabel={'Clear Completed Todos'}
          handleClick={handleClearCompletedTodos}
        />
      </div>
      <MarkAllDone
        areAllDone={todos.every((todo) => todo.isDone === true)}
        handleChange={handleMarkAllDone}
      />
      <Todos
        todos={todos}
        handleChange={handleCheckTodo}
      />
    </div>
  );
}

let initialTodos = [
  {
    todo: 'watch react tutorial',
    isDone: false,
  },
  {
    todo: 'watch react tutorial1',
    isDone: false,
  },
  {
    todo: 'watch react tutorial2',
    isDone: false,
  },
];
