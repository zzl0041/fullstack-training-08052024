// HW17 TODO LIST APP
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Title, Input, Remaining, MarkAllDone, Todos } from './components/todo';
import { fetchTodosAsync } from './features/todoSlice';
import './App.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  return (
    <>
      <Input />
      <div className='remaining-and-clear-all-completed-todos'>
        <MarkAllDone />
        <Remaining />
      </div>
      <Todos />
    </>
  );
}
