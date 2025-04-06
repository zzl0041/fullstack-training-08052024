import { createSlice, configureStore } from '@reduxjs/toolkit'
import { toggleTodo } from '../actions/todoActions';
//Slice
const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo)=>todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
    },
}),

export const {addTodo, toggleTodo} = todoSlice.actions;
const store = configureStore({reducer: todoSlice.reducer});
//usage
store.dispatch(addTodo('Learn Redux Toolkit'));
store.dispatch(toggleTodo(1));
console.log(store.getState());