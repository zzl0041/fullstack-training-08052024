import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todoActions";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a todo"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        Add Todo
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default AddTodo;
