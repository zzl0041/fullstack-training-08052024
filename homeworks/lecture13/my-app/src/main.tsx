import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import HW1 from './HW1.tsx'
import HW2 from './HW2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HW1 />
    <br />
    <HW2 />
    <br />
  </StrictMode>,
)
