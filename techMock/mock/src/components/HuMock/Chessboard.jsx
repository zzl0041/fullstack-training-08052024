import React from 'react';
import Square from './Square';

function Chessboard() {
  const renderChessboard = () => {
    const board = [];
    
    // Generate 8x8 chessboard
    for (let row = 0; row < 8; row++) {
      const squaresInRow = [];
      
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 0;
        squaresInRow.push(
          <Square
            key={`${row}-${col}`}
            isBlack={isBlack}
            row={row}
            col={col}
          />
        );
      }
      
      board.push(
        <div 
          key={`row-${row}`} 
          style={{ 
            height: '50px',
            display: 'flex'
          }}
        >
          {squaresInRow}
        </div>
      );
    }
    
    return board;
  };

  return (
    <div 
      className="chessboard-container" 
      style={{ 
        display: 'inline-block',
        border: '2px solid #333',
        padding: '2px',
        backgroundColor: '#f0f0f0'
      }}
      data-testid="chessboard"
    >
      {renderChessboard()}
    </div>
  );
}

export default Chessboard; 