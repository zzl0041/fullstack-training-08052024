import { useState } from 'react';
import './Hw2.css';

const Hw2 = () => {
  const [clickedButton, setClickedButton] = useState('');

  // Handle button clicks and set the clicked button text
  const handleButtonClick = (buttonLabel) => {
    setClickedButton(`You clicked: ${buttonLabel}`);
  };

  return (
    <div className="phone-layout">
      {/* Display */}
      <div className="phone-display">
        <p>{clickedButton ? clickedButton : 'Click a button below'}</p>
      </div>

      {/* Button Grid */}
      <div className="phone-buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((label) => (
          <button key={label} onClick={() => handleButtonClick(label)}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hw2;
