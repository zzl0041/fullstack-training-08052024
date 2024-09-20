import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function CardSelector({ cards, handleChange }) {
  return (
    <select
      className='selector card-selector'
      onChange={handleChange}
    >
      <option value=''>choose the card</option>
      {cards.map((card, idx) => (
        <option
          key={idx}
          value={idx}
        >
          {card}
        </option>
      ))}
    </select>
  );
}

function ColorSelector({ colors, handleChange }) {
  return (
    <select
      className='selector color-selector'
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

export default function Dropdowns() {
  const cards = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

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

  return (
    <>
      <CardSelector
        cards={cards}
        // handleChange={handleCardSelection}
      />
      <ColorSelector
        colors={colors}
        // handleChange={handleCardSelection}
      />
      <Outlet />
    </>
  );
}
