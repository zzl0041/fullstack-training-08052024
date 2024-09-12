import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [markAll, setMarkAll] = useState(false);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleMarkAll = () => {
    setMarkAll(!markAll);
    setTodos(todos.map((todo) => ({ ...todo, completed: !markAll })));
  };

  return (
    <div className="TodoApp">
      <h1>Todos - ReactJS</h1>
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
