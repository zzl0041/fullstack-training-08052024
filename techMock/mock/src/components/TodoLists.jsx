import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../actions/todoActions'
const TodoList = () =>{
    const [todoText, setTodoText] = useState('');
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();
    const handleAddTodo = () =>{
        if(todoText.trim()){
            dispatch(addTodo(todoText));
            setTodoText('');
        }
    };
    return (
        <div>
            <input type='text' value={todoText} 
            onChange={(e) => setTodoText(e.target.value)} placeholder='Enter a task'/>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span onClick={()=> dispatch(toggleTodo(todo.id))}
                            style={{textDecoration: todo.completed?'line-through': 'none'}}
                            >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;