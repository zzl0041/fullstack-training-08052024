import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  deleteTodoAsync,
  updateTodoAsync,
  addTodoAsync,
} from '../features/todoSlice';

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
            dispatch(addTodoAsync(input.trim()));
            setInput('');
          }
        }}
      />
    </>
  );
};

export const Btn = ({ btName, handleClick }) => {
  return <button onClick={handleClick}>{btName}</button>;
};

export const Remaining = () => {
  // const {
  //   todoslice: { todos, status },
  // } = useSelector((state) => state);
  const { todos, status } = useSelector((state) => state.todoslice);

  const count = todos.filter((todo) => !todo.isComplete).length;

  return <p>{count} remaining</p>;
};

export const MarkAllDone = () => {
  // const {
  //   todoslice: { todos, status },
  // } = useSelector((state) => state);
  const { todos, status } = useSelector((state) => state.todoslice);

  const dispatch = useDispatch();

  const handleMarkAllDone = () => {
    let areAllDone = todos.every((todo) => todo.isComplete);
    todos.forEach((todo) => {
      if (todo.isComplete === areAllDone) {
        dispatch(updateTodoAsync({ ...todo, isComplete: !areAllDone }));
      }
    });
  };

  return (
    <div className='mark-all-done'>
      <input
        type='checkbox'
        checked={todos.every((todo) => todo.isComplete)}
        onChange={handleMarkAllDone}
      />
      <label htmlFor=''>Mark All Done</label>
    </div>
  );
};

const Todo = ({ todo, handleCheckbox, handleDel }) => {
  return (
    <div className='todo-item'>
      <div>
        <input
          type='checkbox'
          checked={todo.isComplete}
          onChange={handleCheckbox}
        />
        <label htmlFor=''>{todo.todoItem}</label>
      </div>
      <Btn
        btName={'delete'}
        handleClick={handleDel}
      />
    </div>
  );
};

export const Todos = () => {
  // const {
  //   todoslice: { todos, status },
  // } = useSelector((state) => state);
  const { todos, status } = useSelector((state) => state.todoslice);

  const dispatch = useDispatch();

  const handleCheckbox = (todo) => {
    dispatch(updateTodoAsync({ ...todo, isComplete: !todo.isComplete }));
  };

  const handleDelete = (todo) => {
    // console.log(todo);
    dispatch(deleteTodoAsync(todo));
  };

  if (status === 'pending') return <div>Loading...</div>;

  if (status === 'failed') return <div>Fetching todos failed</div>;

  return (
    <div className='todos-list'>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          handleCheckbox={() => handleCheckbox(todo)}
          handleDel={() => handleDelete(todo)}
        />
      ))}
    </div>
  );
};
