import "./App.css";
import { getTodos, createTodo, markAllDone, clearDoneTodos, checkTodo } from './store.js';
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";


export default function App() {
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");
  const remaining = useMemo(() => {
      // when todos are updated, update remaining as well
      return Object.values(todos).filter((todos) => !todos.done).length;
    },[todos]);
  
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const addTodo = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(createTodo({ todo: todoInput, done: false }));
      setTodoInput("");
    }
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div className="App">
        <h1>Todos with Vite + React</h1>
        <div>
          <form>
            <label htmlFor="todo">add a todo to todo list: </label>
            <input
              type="text"
              name="todo"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              onKeyDown={addTodo}
            />
          </form>
          <p>remaining {remaining} tasks</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <button onClick={() => dispatch(clearDoneTodos())}>
              clear completed todos
            </button>
            <button onClick={() => dispatch(markAllDone())}>mark all todos completed</button>
            {todos.map(todo => (
              <div key={todo._id}>
                <label htmlFor={todo._id}>{todo.todo}</label>
                <input
                  type="checkbox"
                  name={todo._id}
                  value={todo.todo}
                  onChange={() => dispatch(checkTodo(todo))}
                  checked={todo.done}
                />
              </div>
            ))}
          </form>
        </div>
      </div>
  );
}
