import { combineReducers } from 'redux';
import userReducer from './userReducer';
import editorReducer from './editorReducers';

const rootReducer = combineReducers({
    users: userReducer // Ensure key matches `useSelector` in `UserList.js`
    ,
    editor: editorReducer
});

export default rootReducer;
