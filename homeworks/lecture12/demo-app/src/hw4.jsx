import React, { useState } from 'react';
import './hw4.css';

function Converter() {
  const [inputValue, setInputValue] = useState('');

  const getOrdinalSuffix = (number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = number % 100;
    return number + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
  };

  return (
    <div className="converter-container">
      <input 
        type="text" 
        placeholder="Provide your input" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="result">
        {inputValue === '' ? '' : isNaN(inputValue) ? inputValue : getOrdinalSuffix(parseInt(inputValue))}
      </div>
    </div>
  );
}

export default Converter;
