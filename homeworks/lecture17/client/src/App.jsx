import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, fetchTodos, deleteTodo } from './redux/todoSlice';
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
  const todos = useSelector((state) => state.todoSlice.todos);

  const handleClearAllComplete = () => {
    todos.forEach((todo) => {
      if (todo.checked) {
        dispatch(updateTodo({ ...todo, checked: false }));
      }
    });
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

  const handleMarkAllDone = () => {
    todos.forEach((todo) => {
      if (todo.checked !== !isAllDoneChecked) {
        dispatch(updateTodo({ ...todo, checked: !isAllDoneChecked }));
      }
    });
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

function Todo({ todo, onChange, onDelete }) {
  const dispatch = useDispatch();

  return (
    <li className='todo-item'>
      <input type='checkbox' checked={todo.checked} onChange={onChange} />
      {todo.description}
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
}

function Todos() {
  const { todos, loading, error } = useSelector((state) => state.todoSlice);
  const dispatch = useDispatch();

  const handleTodoCheckboxChange = (todo) => {
    dispatch(updateTodo({ ...todo, checked: !todo.checked }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  if (loading) {
    return <p>Loading todos...</p>;
  }

  if (error) {
    return <p>Error loading todos: {error}</p>;
  }

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          onChange={() => handleTodoCheckboxChange(todo)}
          onDelete={() => handleDeleteTodo(todo._id)}
        />
      ))}
    </ul>
  );
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

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
