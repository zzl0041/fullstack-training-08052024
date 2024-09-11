import React from 'react';
import { useState } from 'react';
import './styles.css';

function Btn({ text, handleClick }) {
  return (
    <button
      className='hw2-btn'
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default function HW2() {
  const [display, setDisplay] = useState('');

  return (
    <div className='hw-2'>
      <div className='screen'>
        <div className='status-bar'>{display}</div>
        <div className='btns'>
          {mainScreenDigits.map((digit, idx) => (
            <Btn
              text={digit}
              key={idx}
              handleClick={() => {
                setDisplay(digit);
              }}
            />
          ))}
        </div>
        <div className='bottom-bar'>
          {btmBarDigits.map((digit) => (
            <Btn
              text={digit}
              key={digit}
              handleClick={() => {
                setDisplay(digit);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const mainScreenDigits = [];
for (let i = 0; i < 16; i++) {
  mainScreenDigits.push((i + 1).toString());
}

const btmBarDigits = [];
for (let i = 0; i < 4; i++) {
  btmBarDigits.push((i + 17).toString());
}
