import React from 'react';
import Chessboard from './Chessboard';

//test
function SnowFlake1() {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <Chessboard />
    </div>
  );
}

export default SnowFlake1;