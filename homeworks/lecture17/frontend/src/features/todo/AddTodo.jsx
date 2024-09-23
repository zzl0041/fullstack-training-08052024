import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function AddTodo() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      dispatch(addTodo(title))
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='add todo'
      />
      <button type='submit'>add</button>
    </form>
  )
}

export default AddTodo
