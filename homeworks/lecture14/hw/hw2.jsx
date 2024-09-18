import React, { Component } from 'react';
import { useState } from 'react';
import './styles-hw2.css';

function Card({ component, handleChange }) {
  const { id, name, color } = component;

  return (
    <div
      className='card'
      key={id}
      style={{ background: color }}
    >
      <p>Component name:</p>
      <input
        className='card-input'
        type='text'
        value={name}
        onChange={(e) => {
          handleChange(id, e.target.value);
        }}
      />
    </div>
  );
}

function CardSelector({ cards, handleChange }) {
  return (
    <select
      className='selector card-selector'
      onChange={handleChange}
    >
      {cards.map((card) => (
        <option
          key={card.id}
          value={card.id}
        >
          {card.name}
        </option>
      ))}
    </select>
  );
}

function ColorSelector({ colors, selectedColor, handleChange }) {
  return (
    <select
      className='selector color-selector'
      value={selectedColor}
      onChange={handleChange}
    >
      <option value=''>choose the color</option>
      {colors.map((color, index) => (
        <option
          key={index}
          value={color}
        >
          {color}
        </option>
      ))}
    </select>
  );
}

function App() {
  const initialCardNames = [
    'arron',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
  ];

  const colors = [
    'antiquewhite',
    'azure',
    'blueviolet',
    'chocolate',
    'cornflowerblue',
    'crimson',
    'dodgerblue',
    'forestgreen',
    'navy',
  ];

  const [components, setComponents] = useState(
    initialCardNames.map((name, index) => ({
      id: index,
      name: name,
      color: 'white',
    }))
  );

  const [selectedId, setSelectedId] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');

  const handleNameChange = (id, newName) => {
    const newComponents = [...components];
    newComponents[id].name = newName;
    setComponents(newComponents);
  };

  const handleColorChange = (e) => {
    const curColor = e.target.value;
    setSelectedColor(curColor);
    const newComponents = [...components];
    newComponents[selectedId].color = curColor;
    setComponents(newComponents);
    setSelectedColor('');
  };

  const handleCardSelection = (e) => {
    setSelectedId(parseInt(e.target.value, 10));
  };

  return (
    <div className='hw-2'>
      <div className='dropdowns'>
        <CardSelector
          cards={components}
          handleChange={handleCardSelection}
        />
        <ColorSelector
          colors={colors}
          selectedColor={selectedColor}
          handleChange={handleColorChange}
        />
      </div>
      <div className='cards-wrap'>
        {components.map((component) => (
          <Card
            component={component}
            handleChange={handleNameChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
