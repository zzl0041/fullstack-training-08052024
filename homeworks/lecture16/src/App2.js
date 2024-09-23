import {useState, useEffect, useRef} from 'react'

import {
    configureStore,
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    count:0,
    data:[]
}

const counter = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state, action) =>{
            state.data[action.payload.index][1] = action.payload.value
            state.count = state.data.filter(item => item[1] == false).length
        },
        markAll: (state, action)=>{
            state.data.forEach(item=>item[1] = action.payload.checked)
            state.count = state.data.filter(item => item[1] == false).length
        },
        completed: (state)=>{
            state.count = state.data.length;
            state.data.forEach(item=>item[1] = false)
        },
        add: (state, action)=>{
            state.data.push([action.payload.content,action.payload.completed]);
            state.count += 1;
        },
    }
})

const store = configureStore({reducer: counter.reducer})


function App() {
const [state, setState] = useState(store.getState()); 

useEffect(() => {
const unsubscribe = store.subscribe(() => {
setState(store.getState()); 
});
return () => unsubscribe(); 
}, []);

const [value,setValue] = useState('')

const handleChange = (e) =>{
setValue(e.target.value)
}

const inputRef = useRef(null);

const handleSubmit = () => {
if(value.trim().length > 0){
    store.dispatch(counter.actions.add({content:value, completed: false}))
} 
    setValue(''); 
};

const handleClick = (value,index) =>{
    store.dispatch(counter.actions.increment({index:index,value:value}));
}


const handleMark = (value) =>{
store.dispatch(counter.actions.markAll({checked: value}));
}
const handleCompleted = (value) =>{
    store.dispatch(counter.actions.completed({checked:value}));
    if(inputRef.current){
        inputRef.current.checked = false
    }
}

return (
<> 
<h3>Todos-ReactJS</h3>
<input onChange = {(e)=>handleChange(e)} value = {value}  /> 
<button type = 'submit' 
onClick = {handleSubmit}>submit</button>
<p>{state.data.filter(item =>item[1] === false).length} remaining</p>
<button onClick={()=>handleCompleted(false)}>clear completed todos</button>
<input type = 'checkbox' 
onClick = {(e)=>handleMark(e.target.checked)} ref={inputRef} />
<label>Mark all down</label>
<ul>
  <li>what</li>
  {state.data.map((item, index)=>(
    <li key={index} >
      <input type='checkbox' 
      checked = {item[1]}
      onChange = {(e) => handleClick(e.target.checked,index)}/>
      <p>{item}</p>
    </li>
  ))}
</ul>
</>
);
}

export default App;
