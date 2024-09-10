import { useState, useEffect } from "react";

function HW1() {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoList, setTodoList] = useState<{[key: string]: boolean}>({});
  const [remaining, setRemaining] = useState<number>(0);

  useEffect(() => {
    setRemaining(Object.values(todoList).filter(checked => !checked).length);
  }, [todoList]);

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTodoList({...todoList, [todoInput]: false});
    }
  };

  const clearCompletedTodoList = () => {
    setTodoList(Object.fromEntries(
      Object.entries(todoList).filter(([, checked]) => !checked))
    );
    
  };

  const checkTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoList({...todoList, [e.target.value]: !todoList[e.target.value]});
  };

  return (
    <div>
      <h1>Todos with Vite + React + TypeScript</h1>
      <div>
        <form>
          <label htmlFor="todo">add a todo to todo list: </label>
          <input
            type="text"
            name="todo"
            value={todoInput}
            onChange={e => setTodoInput(e.target.value)}
            onKeyDown={addTodo}
          />
        </form>
        <p>remaining {remaining} tasks</p>
        <form onSubmit={e => e.preventDefault()}>
          <button onClick={clearCompletedTodoList}>clear completed todos</button>
          {Object.entries(todoList).map(([todo, checked]) => (
            <div key={todo}>
              <label htmlFor={todo}>{todo}</label>
              <input
                type="checkbox"
                name={todo}
                value={todo}
                onChange={checkTodo}
                checked={checked}
              />
            </div>            
          ))}
        </form>
      </div>
    </div>
  );
}

export default HW1;
