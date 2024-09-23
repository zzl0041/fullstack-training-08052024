import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import ColorComponent from './components/ColorComponent';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [selectedComponent, setSelectedComponent] = useState('Component1');
  const [color, setColor] = useState('');

  const components = ['Component1', 'Component2', 'Component3', 'Component4', 'Component5', 'Component6'];

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/users"
          element={
            isAuthenticated ? <Users /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/users/:login"
          element={
            isAuthenticated ? <UserProfile /> : <Navigate to="/login" replace />
          }
        />
      </Routes>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Select a Component and Color</h2>

        {/* Dropdown to select the component */}
        <select value={selectedComponent} onChange={(e) => setSelectedComponent(e.target.value)}>
          {components.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>

        {/* Dropdown to select color */}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">Choose color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>

        {/* Links to each color component route */}
        {components.map((component) => (
          <Link key={component} to={`/${component}`} style={{ margin: '10px' }}>
            Go to {component}
          </Link>
        ))}

        {/* Routes for each color component */}
        <Routes>
          {components.map((component) => (
            <Route
              key={component}
              path={`/${component}`}
              element={<ColorComponent name={component} color={component === selectedComponent ? color : ''} />}
            />
          ))}
        </Routes>
      </div>

    </Router>

    
  );
};

export default App;
