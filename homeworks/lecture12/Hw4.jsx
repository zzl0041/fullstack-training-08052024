import { useState } from 'react'

const Hw4 = () => {
  const [number, setNumber] = useState('')

  const getOrdinal = (n) => {
    const s = ['th', 'st', 'nd', 'rd'],
      v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (!isNaN(value) && value !== '') {
      setNumber(parseInt(value))
    } else {
      setNumber('')
    }
  }

  return (
    <>
      <input type='text' value={number} onChange={handleChange} />
      <span>{number !== '' ? getOrdinal(number) : ''}</span>
    </>
  )
}

export default Hw4
