import "./App.css";
import TodoApp from './Todo'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './todoReducer';

const store = createStore(todoReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
