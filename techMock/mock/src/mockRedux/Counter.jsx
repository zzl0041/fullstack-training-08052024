//actions
const increment = () => ({type: 'INCREMENT'});
const decrement = () => ({type: 'DECREMENT'});
//Reducer
const initialState = {count: 0};
const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {...state, count: state.count+1};
        case 'DECREMENT':
            return {...state, count: state.count-1};
        default:
            return state;
    }
};
//store
import {createStore} from 'redux';
const store = createStore(counterReducer);
//Dispatch Actions
store.dispatch(increment());
store.dispatch(decrement());
console.log(store.getState());
