import { useState } from 'react';

const Hw4 = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (!isNaN(parseInt(value))) {
      switch (value) {
        case '1':
          setOutputValue('1st');
          break;

        case '2':
          setOutputValue('2nd');
          break;
        case '3':
          setOutputValue('3rd');
          break;
        default:
          setOutputValue(value + 'th');
          break;
      }
    } else {
      setOutputValue(value);
    }
  };
  return (
    <div className='input-box'>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <input value={outputValue}></input>
    </div>
  );
};

export default Hw4;
