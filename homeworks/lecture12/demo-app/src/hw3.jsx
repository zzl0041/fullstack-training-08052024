import React, { useState } from 'react';
import './hw3.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count + 10)}>+10</button>
        <button onClick={() => setCount(count + 100)}>+100</button>
        <button onClick={() => setCount(count + 1000)}>+1000</button>
      </div>
      <div className="count-reset">
        <div className="counter">{count}</div> 
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
