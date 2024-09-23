import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  uncheckAllTodos,
  toggleAllTodos,
  toggleTodo,
} from './redux/todoSlice';
import './App.css';

function Title() {
  return <h1 className='title'>Todos - ReactJs</h1>;
}

function Input() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      dispatch(addTodo(inputValue.trim()));
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      className='input-box'
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder='Type a todo and hit Enter'
    />
  );
}

function RemainingTodos() {
  const todos = useSelector((state) => state.todoSlice.todos);
  const remainingTodos = todos.filter((todo) => !todo.checked).length;
  return <p className='remaning-todos'>{remainingTodos} remaining</p>;
}

function ClearAllCompleteBtn() {
  const dispatch = useDispatch();

  const handleClearAllComplete = () => {
    dispatch(uncheckAllTodos());
  };
  return (
    <button onClick={handleClearAllComplete}>Clear Completed Todos</button>
  );
}

function MarkAllDoneBtn() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoSlice.todos);

  const isAllDoneChecked =
    todos.length > 0 && todos.every((todo) => todo.checked);

  const handleMarkAllDone = (event) => {
    const allChecked = event.target.checked;
    dispatch(toggleAllTodos(allChecked));
  };

  return (
    <div className='all-done-btn'>
      <label>
        <input
          type='checkbox'
          checked={isAllDoneChecked}
          onChange={handleMarkAllDone}
        />
        Mark All Done{' '}
      </label>
    </div>
  );
}

function Todo({ todo, onChange }) {
  return (
    <li className='todo-item'>
      <input type='checkbox' checked={todo.checked} onChange={onChange} />
      {todo.text}
    </li>
  );
}

function Todos() {
  const todos = useSelector((state) => state.todoSlice.todos);
  const dispatch = useDispatch();

  const handleTodoCheckboxChange = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onChange={() => handleTodoCheckboxChange(todo.id)}
        />
      ))}
    </ul>
  );
}

const App = () => {
  return (
    <>
      <div className='container'>
        <div className='todoForm'>
          <Title />
          <Input />
          <div className='reaminingTodos-clearAllBtn'>
            <RemainingTodos />
            <ClearAllCompleteBtn />
          </div>
          <MarkAllDoneBtn />
          <Todos />
        </div>
      </div>
    </>
  );
};

export default App;
