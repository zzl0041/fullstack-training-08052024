import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, toggleTodo, clearCompleted, markAll } from './todoSlice';

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const markAllDone = useSelector(state => state.todos.markAll);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleMarkAll = () => {
    dispatch(markAll(!markAllDone));
  };

  return (
    <div className="TodoApp">
      <h1>Todos - Redux Toolkit</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
        size="60"
        placeholder="Type a todo and hit Enter"
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', alignItems: 'center' }}>
        <span>{todos.filter(todo => !todo.completed).length} remaining</span>
        <button onClick={handleClearCompleted}>Clear Completed Todos</button>
      </div>

      <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'left' }}>
        <label>
          <input
            type="checkbox"
            checked={markAllDone}
            onChange={handleMarkAll}
          />
          Mark All Done
        </label>
      </div>

      <table style={{ width: '100%' }}>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td style={{ width: '5%' }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(index))}
                />
              </td>
              <td style={{ width: '95%', textAlign: 'left', paddingLeft: '10px' }}>{todo.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoApp;
