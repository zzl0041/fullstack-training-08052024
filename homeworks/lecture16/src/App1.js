import { useState, useEffect, useRef } from 'react';
import { createStore } from 'redux';

const initialState = {
  count: 0,
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        data: state.data.map((item, idx) =>
          idx === action.payload.index
            ? [item[0], action.payload.value]
            : item
        ),
        count: state.data.filter(item => !item[1]).length
      };

    case 'MARKALL':
      return {
        ...state,
        data: state.data.map(item => [item[0], action.payload.checked]),
        count: action.payload.checked ? 0 : state.data.length
      };

    case 'COMPLETED':
      return {
        ...state,
        data: state.data.map(item => [item[0], false]),
        count: state.data.length 
      };

    case 'ADD':
      return {
        ...state,
        data: [...state.data, [action.payload.content, action.payload.completed]],
        count: state.data.filter(item => !item[1]).length + 1
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

function App() {
  const [state, setState] = useState(store.getState());
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value.trim()) {
      store.dispatch({
        type: 'ADD',
        payload: {
          content: value,
          completed: false
        }
      });
      setValue(''); 
    }
  };

  const handleClick = (checked, index) => {
    store.dispatch({
      type: 'INCREMENT',
      payload: {
        index: index,
        value: checked
      }
    });
  };

  const handleMark = (checked) => {
    store.dispatch({
      type: 'MARKALL',
      payload: {
        checked: checked
      }
    });
  };

  const handleCompleted = () => {
    store.dispatch({ type: 'COMPLETED' });
    if (inputRef.current) {
      inputRef.current.checked = false; 
    }
  };

  return (
    <>
      <h3>Todos-ReactJS</h3>
      <input onChange={(e) => handleChange(e)} value={value} />
      <button type='submit' onClick={handleSubmit}>Submit</button>
      <p>{state.data.filter(item=>item[1] === false).length} remaining</p>
      <button onClick={handleCompleted}>Clear completed todos</button>
      <input
        type='checkbox'
        onClick={(e) => handleMark(e.target.checked)}
        ref={inputRef}
      />
      <label>Mark all down</label>
      <ul>
        {state.data.map((item, index) => (
          <li key={index}>
            <input
              type='checkbox'
              checked={item[1]}
              onChange={(e) => handleClick(e.target.checked, index)}
            />
            <p>{item[0]}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

