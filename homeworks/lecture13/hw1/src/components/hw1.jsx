import { useState } from 'react';
import PropTypes from 'prop-types';

const Hw1 = () => {
  const [todos, setTodos] = useState([]);
  const [isAllDoneChceked, setIsAllDoneChecked] = useState(false);

  function Title() {
    return <h1 className='title'>Todos - ReactJs</h1>;
  }

  function Input() {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && inputValue.trim()) {
        setTodos((prevTodos) => [
          ...prevTodos,
          { text: inputValue, checked: false },
        ]);
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
    const remainingTodos = todos.filter((todo) => !todo.checked).length;
    return <p className='remaning-todos'>{remainingTodos} remaining</p>;
  }

  function ClearAllCompleteBtn() {
    const handleClearAllComplete = () => {
      setIsAllDoneChecked(false);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => ({ ...todo, checked: false }))
      );
    };
    return (
      <button onClick={handleClearAllComplete}>Clear Completed Todos</button>
    );
  }

  function MarkAllDoneBtn() {
    const handleMarkAllDone = (event) => {
      const allChecked = event.target.checked;
      setIsAllDoneChecked(allChecked);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => ({ ...todo, checked: allChecked }))
      );
    };

    return (
      <div className='all-done-btn'>
        <label>
          <input
            type='checkbox'
            checked={isAllDoneChceked}
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

  Todo.propTypes = {
    todo: PropTypes.shape({
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  function Todos({ todos, setTodos }) {
    const handleTodoCheckboxChange = (index) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo, i) =>
          i === index ? { ...todo, checked: !todo.checked } : todo
        )
      );
    };
    return (
      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onChange={() => handleTodoCheckboxChange(index)}
          />
        ))}
      </ul>
    );
  }

  Todos.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    ).isRequired,
    setTodos: PropTypes.func.isRequired,
  };

  return (
    <>
      <div className='container'>
        <form className='todoForm' onSubmit={(e) => e.preventDefault()}>
          <Title />
          <Input />
          <div className='reaminingTodos-clearAllBtn'>
            <RemainingTodos />
            <ClearAllCompleteBtn />
          </div>
          <MarkAllDoneBtn />
          <Todos todos={todos} setTodos={setTodos} />
        </form>
      </div>
    </>
  );
};

export default Hw1;
