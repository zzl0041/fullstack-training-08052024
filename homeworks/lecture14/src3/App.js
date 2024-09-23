import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(""); 
  const [data, setData] = useState([]); 
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value); 
  };

  const handleClick = (e) => {
    e.preventDefault(); 
    const array = [...data];
    array.push({ content: value, completed: false }); 
    setData(array); 
    setValue(''); 
    const num = array.filter((item) => item.completed === false).length; 
    setCount(num); 
  };


  const handleToggle = (index) => {
    const array = [...data];
    array[index].completed = !array[index].completed; 
    setData(array); 
    const num = array.filter((item) => item.completed === false).length; 
    setCount(num);
  };

  const handleButton = (value) => {
    const array = data.map((item) => ({ ...item, completed: value })); 
    setData(array); 
    value === true ? setCount(0) : setCount(data.length); 
  };

  return (
    <div>
      <h1>Todos - ReactJS</h1>
      <form>
        <input onChange={handleChange} value={value} />
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
      <div>{count} remaining</div>
      <button onClick={() => handleButton(false)}>Clear Completed Todos</button>
      <button onClick={() => handleButton(true)}>Mark All Done</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(index)}
            />
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
