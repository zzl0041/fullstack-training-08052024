import React from 'react';

function Square({ isBlack, row, col }) {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: isBlack ? 'black' : 'white',
        display: 'inline-block',
        border: '1px solid #ccc',
        boxSizing: 'border-box'
      }}
      data-testid={`square-${row}-${col}`}
    />
  );
}

export default Square; 