import { AppDispatch, RootState } from '../redux/store';
import {
  Todo,
  createTodo,
  deleteTodo,
  fetchTodos,
  updateTodo,
} from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(createTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (todo: Todo) => {
    dispatch(updateTodo({ ...todo, done: !todo.done }));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='container mt-5' style={{ maxWidth: '600px' }}>
      <h1 className='mb-4'>Todo List</h1>
      <div className='row mb-3'>
        <div className='col-8'>
          <input
            type='text'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder='Enter todo'
            className='form-control'
          />
        </div>
        <div className='col-4 d-flex justify-content-end'>
          <button className='btn btn-primary' onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>

      <ul className='list-unstyled'>
        {todos.map((todo) => (
          <li key={todo._id} className='mb-2 d-flex align-items-center'>
            <div className='form-check me-3'>
              <input
                className='form-check-input'
                type='checkbox'
                checked={todo.done}
                onChange={() => handleToggleTodo(todo)}
              />
            </div>
            <span
              onClick={() => handleToggleTodo(todo)}
              className='flex-grow-1'
              style={{ cursor: 'pointer' }}
            >
              {todo.todo}
            </span>
            <button
              className='btn btn-danger btn-sm ms-3'
              onClick={() => handleDeleteTodo(todo._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
