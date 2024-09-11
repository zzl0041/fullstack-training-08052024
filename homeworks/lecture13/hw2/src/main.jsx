import PhoneLayout from './PhoneLayout.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhoneLayout />
  </StrictMode>,
)
