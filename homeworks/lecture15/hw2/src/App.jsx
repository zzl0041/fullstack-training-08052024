import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom'
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

const ComponentPage = ({ components, handleNameChange, handleColorChange }) => {
  const { componentName } = useParams()
  const component = components.find((c) => c.name === componentName)
  const navigate = useNavigate()

  if (!component) {
    return <h2>Component not found</h2>
  }

  return (
    <div>
      <ColorSquare
        name={component.name}
        color={component.color}
        onNameChange={(newName) => {
          handleNameChange(newName, component.name)
          navigate(`/${newName}`) // Update URL when name changes
        }}
      />
      <div className='controls'>
        <label>Choose color: </label>
        <select
          value={component.color}
          onChange={(e) => handleColorChange(e.target.value, component.name)}
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

  const handleNameChange = (newName, oldName) => {
    setComponents(
      components.map((component) =>
        component.name === oldName ? { ...component, name: newName } : component
      )
    )
  }

  const handleColorChange = (newColor, componentName) => {
    setComponents(
      components.map((component) =>
        component.name === componentName
          ? { ...component, color: newColor }
          : component
      )
    )
  }

  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            {components.map((component) => (
              <li key={component.name}>
                <Link to={`/${component.name}`}>{component.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {components.map((component) => (
            <Route
              key={component.name}
              path={`/:componentName`}
              element={
                <ComponentPage
                  components={components}
                  handleNameChange={handleNameChange}
                  handleColorChange={handleColorChange}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  )
}

export default App
