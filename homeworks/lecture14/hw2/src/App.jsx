import { useState } from 'react'
import './App.css'

const ColorSquare = ({ name, color, onNameChange }) => {
  return (
    <div className='square' style={{ backgroundColor: color }}>
      <label>Component name: </label>
      <input
        type='text'
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className='name-input'
      />
    </div>
  )
}

const App = () => {
  const [components, setComponents] = useState([
    { name: 'first', color: '#f0f0f0' },
    { name: 'second', color: '#f0f0f0' },
    { name: 'third', color: '#f0f0f0' },
    { name: 'fourth', color: '#f0f0f0' },
    { name: 'fifth', color: '#f0f0f0' },
    { name: 'sixth', color: '#f0f0f0' },
  ])

  const [selectedComponent, setSelectedComponent] = useState(components[0].name)
  const [selectedColor, setSelectedColor] = useState('#f0f0f0')

  const handleNameChange = (newName) => {
    setComponents(
      components.map((component) =>
        component.name === selectedComponent
          ? { ...component, name: newName }
          : component
      )
    )
    setSelectedComponent(newName) // Update the selected component in the dropdown
  }

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor)
    setComponents(
      components.map((component) =>
        component.name === selectedComponent
          ? { ...component, color: newColor }
          : component
      )
    )
  }

  return (
    <div className='app'>
      <div className='controls'>
        <label>Select component: </label>
        <select
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value)}
        >
          {components.map((component) => (
            <option key={component.name} value={component.name}>
              {component.name}
            </option>
          ))}
        </select>

        <label>Choose color: </label>
        <select
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
        >
          <option value='#f0f0f0'>White</option>
          <option value='#ffcccb'>Red</option>
          <option value='#90ee90'>Green</option>
          <option value='#add8e6'>Blue</option>
          <option value='#ffff00'>Yellow</option>
          <option value='#dda0dd'>Purple</option>
          <option value='#ffa500'>Orange</option>
        </select>
      </div>

      <div className='squares'>
        {components.map((component, index) => (
          <ColorSquare
            key={index}
            name={component.name}
            color={component.color}
            onNameChange={handleNameChange}
          />
        ))}
      </div>
    </div>
  )
}

export default App
