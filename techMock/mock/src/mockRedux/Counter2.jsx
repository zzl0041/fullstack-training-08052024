import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import { Provider } from "react-redux";

//reducer
const counterReducer = (state = {count: 0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count+1};
        case 'DECREMENT':
            return {...state, count: state.count-1};
        default:
            return state;
    }
};

//store
const store = createStore(counterReducer);

//counter component
const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>increment</button>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>decrement</button>
        </div>
    );
};
//App Component
const App = () => (
    <Provider store={store}>
        <Counter/>
    </Provider>
);
