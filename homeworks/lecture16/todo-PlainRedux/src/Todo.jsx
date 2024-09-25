import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const markAll = useSelector(state => state.markAll);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  const handleMarkAll = () => {
    dispatch({ type: 'MARK_ALL' });
  };

  return (
    <div className="TodoApp">
      <h1>Todos - Redux</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTodo()}
        size="60"
        placeholder="Type a todo and hit Enter"
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', alignItems: 'center' }}>
        <span>{todos.filter(todo => !todo.completed).length} remaining</span>
        <button onClick={clearCompleted}>Clear Completed Todos</button>
      </div>

      <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'left' }}>
        <label>
          <input
            type="checkbox"
            checked={markAll}
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
                  onChange={() => toggleTodo(index)}
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