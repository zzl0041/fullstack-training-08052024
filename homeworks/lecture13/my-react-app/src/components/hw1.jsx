import { useState } from "react";

function Hw1(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if(inputValue.trim() === '') return;
        setTodos([...todos, {text: inputValue, completed: false}]);
        setInputValue('');
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const clearCompletedTodos = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {
                    todos.map((todo,index)=>(
                        <li key={index}>
                            <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(index)}/>
                            {todo.text}
                        </li>
                    ))
                }
            </ul>

            <button onClick={clearCompletedTodos} disabled={todos.every(todo => !todo.completed)}>
                Clear Completed Todos
            </button>
        </div>
    )
}

export default Hw1;