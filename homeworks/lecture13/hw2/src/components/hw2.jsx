import { useState } from 'react';
import PropTypes from 'prop-types';

const Hw2 = () => {
  const [status, setStatus] = useState('status bar');
  const digitsTop = Array.from({ length: 16 }, (_, index) => ({
    text: (index + 1).toString(),
  }));
  const digitsButtom = Array.from({ length: 4 }, (_, index) => ({
    text: (index + 17).toString(),
  }));

  function StatusBar() {
    return <div className='status-bar'>{status}</div>;
  }

  function Digit({ digit }) {
    const handleClick = () => {
      setStatus(`${digit.text}`);
    };

    return <button onClick={handleClick}> {digit.text} </button>;
  }

  Digit.propTypes = {
    digit: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
  };

  function Digits({ digits }) {
    return (
      <div className='grid-container'>
        {digits.map((digit, index) => (
          <Digit key={index} digit={digit} />
        ))}
      </div>
    );
  }

  Digits.propTypes = {
    digits: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return (
    <div className='phone'>
      <div className='screen'>
        <StatusBar />
        <Digits digits={digitsTop} />
        <div className='buttom-row'>
          <Digits digits={digitsButtom} />
        </div>
      </div>
    </div>
  );
};

export default Hw2;
