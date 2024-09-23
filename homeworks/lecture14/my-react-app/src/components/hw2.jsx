import React, { useState } from 'react';
import './ColorComponents.css';

const ColorComponents = () => {
  const [components, setComponents] = useState([
    { id: 1, name: 'Component 1', color: 'red' },
    { id: 2, name: 'Component 2', color: 'green' },
    { id: 3, name: 'Component 3', color: 'blue' },
    { id: 4, name: 'Component 4', color: 'yellow' },
    { id: 5, name: 'Component 5', color: 'purple' },
    { id: 6, name: 'Component 6', color: 'orange' },
  ]);
  const [selectedComponentId, setSelectedComponentId] = useState(1);

  // List of color options for the dropdown
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  // Handle component selection
  const handleComponentSelect = (event) => {
    setSelectedComponentId(Number(event.target.value));
  };

  // Handle color selection from dropdown
  const handleColorChange = (event) => {
    const newColor = event.target.value;
    if (newColor !== '') {
      setComponents((prevComponents) =>
        prevComponents.map((component) =>
          component.id === selectedComponentId
            ? { ...component, color: newColor }
            : component
        )
      );
    }
    // Reset dropdown to show 'Choose color' again
    event.target.value = '';
  };

  // Handle name change dynamically
  const handleNameChange = (event, componentId) => {
    const newName = event.target.value;
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === componentId ? { ...component, name: newName } : component
      )
    );
  };

  return (
    <div className="color-components-container">
      {/* Component Selector Dropdown */}
      <div className="controls">
        <label htmlFor="component-select">Select Component:</label>
        <select
          id="component-select"
          value={selectedComponentId}
          onChange={handleComponentSelect}
        >
          {components.map((component) => (
            <option key={component.id} value={component.id}>
              {component.name}
            </option>
          ))}
        </select>
      </div>

      {/* Color Picker as dropdown */}
      <div className="controls">
        <label htmlFor="color-picker">Pick Color:</label>
        <select id="color-picker" onChange={handleColorChange} defaultValue="">
          <option value="">Choose color</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      {/* Display Components */}
      <div className="components-grid">
        {components.map((component) => (
          <div
            key={component.id}
            className="color-component"
            style={{ backgroundColor: component.color }}
          >
            <input
              type="text"
              value={component.name}
              onChange={(event) => handleNameChange(event, component.id)}
              className="name-input"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorComponents;
