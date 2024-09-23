import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from './features/todo/todoSlice'
import TodoList from './features/todo/TodoList'
import AddTodo from './features/todo/AddTodo'

function App() {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.todo)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className='app'>
      <h1>TodoList</h1>
      <AddTodo />
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <TodoList />
    </div>
  )
}

export default App
