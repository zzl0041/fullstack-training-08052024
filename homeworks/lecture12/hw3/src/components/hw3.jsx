import { useState } from 'react';

const Hw3 = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='button-row'>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count + 10)}>+10</button>
        <button onClick={() => setCount(count + 100)}>+100</button>
        <button onClick={() => setCount(count + 1000)}>+1000</button>
      </div>
      <div className='number-display'>{count}</div>
    </>
  );
};

export default Hw3;
