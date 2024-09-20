import React, { useState } from 'react';

const Hw3 = () => {
  const [count, setCount] = useState(0);

  const incrementBy = (value) => {
    setCount(count + value);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={() => incrementBy(1)}>+1</button>
        <button onClick={() => incrementBy(10)}>+10</button>
        <button onClick={() => incrementBy(100)}>+100</button>
        <button onClick={() => incrementBy(1000)}>+1000</button>
        <button onClick={resetCount} style={{ marginLeft: '10px', backgroundColor: '#f44336', color: 'white' }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Hw3;
