import { StrictMode } from 'react'
import TodoList from './TodoList.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
)
