import { useState } from 'react'

const Hw3 = () => {
  const [count, setCount] = useState(0)

  const increment = (value) => {
    setCount(count + value)
  }

  return (
    <>
      <div>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(10)}>+10</button>
        <button onClick={() => increment(100)}>+100</button>
        <button onClick={() => increment(1000)}>+1000</button>
      </div>
      <h1>{count}</h1>
    </>
  )
}

export default Hw3
