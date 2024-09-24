import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosAsync, createTodoAsync, updateTodoAsync, deleteTodoAsync } from "./todoSlice";

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  const handleAddTodo = () => {
    dispatch(createTodoAsync(newTodo));
    setNewTodo("");
  };

  const handleToggleTodo = (id) => {
    dispatch(updateTodoAsync(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {status === "loading" && <p>Loading...</p>}
      {todos?.map((todo) => (
        <div key={todo._id}>
          <p>
            {todo.todo} - {todo.done ? "Completed" : "Pending"}
          </p>
          <button onClick={() => handleToggleTodo(todo._id)}>
            Toggle Done
          </button>
          <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
