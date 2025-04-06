import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Correct import for redux-thunk
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)  // Apply redux-thunk without devtools
);

export default store;