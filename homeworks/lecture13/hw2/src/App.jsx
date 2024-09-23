import { useState } from 'react'
import './App.css'

function App() {
  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonClick = (number) => {
    setSelectedButton(number)
  }

  return (
    <div className='app-container'>
      <div className='status-bar'>
        {selectedButton ? `Selected: ${selectedButton}` : 'status bar'}
      </div>
      <div className='button-grid'>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            className={`grid-button ${
              selectedButton === number ? 'active' : ''
            }`}
            onClick={() => handleButtonClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
