import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, List, Button, Typography, Checkbox } from 'antd';
import { addTodo, toggleTodo, markAllCompleted, clearCompletedTodos } from './todoSlice';

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector(state => state.todos);
  const allCompleted = useSelector(state => state.allCompleted);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (newTodo.trim() !== "" && e.key === "Enter") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const toggleTodoCompleted = (index) => {
    dispatch(toggleTodo(index));
  };

  const markAllAsCompleted = (e) => {
    dispatch(markAllCompleted(e.target.checked));
  };

  const clearCompleted = () => {
    dispatch(clearCompletedTodos());
  };

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <Typography.Title>Todos - React and Redux</Typography.Title>
      <Input
        placeholder="Type a todo and hit Enter"
        value={newTodo}
        onChange={handleInputChange}
        onKeyPress={handleAddTodo}
        style={{ marginBottom: "20px" }}
      />
      <Typography.Text>{activeTodosCount} remaining</Typography.Text>
      <Button
        onClick={clearCompleted}
        style={{ float: "right", marginBottom: "10px" }}
      >
        Clear Completed Todos
      </Button>
      <Checkbox
        onChange={markAllAsCompleted}
        checked={allCompleted}
        style={{ marginTop: "10px", marginBottom: "20px", display: "flex" }}
      >
        Mark All Done
      </Checkbox>
      <List
        bordered
        dataSource={todos}
        renderItem={(todo, index) => (
          <List.Item>
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleTodoCompleted(index)}
            >
              {todo.completed ? (
                <del>{todo.text}</del>
              ) : (
                <span>{todo.text}</span>
              )}
            </Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;