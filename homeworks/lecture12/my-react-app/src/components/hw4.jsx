import React, {useState} from "react"

const Hw4 = () => {
    const [inputValue, setInputValue] = useState('');
    const [convertedValue, setConvertedValue] = useState('');

    const GetOrdinalSuffix = (num) => {
        let lastDigit = num % 10;
        let lastTwoDigits = num % 100;
        if(lastTwoDigits >= 11 && lastTwoDigits <= 13) return num + 'th';
        switch (lastDigit){
            case 1:
                return num + 'st';
            case 2:
                return num + 'nd';
            case 3:
                return num + 'rd';
            default:
                return num + 'th';
        }
    }

    const handleInputChange = (e) => {
        const input = e.target.value;
        setInputValue(input);

        if(!isNaN(input) && input.trim() !== ''){
            const number = parseInt(input, 10);
            setConvertedValue(GetOrdinalSuffix(number));
        }else{
            setConvertedValue(input);
        }
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Convert Numbers to Ordinal</h2>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="Enter a number" 
            style={{ padding: '10px', width: '300px', fontSize: '16px' }} 
          />
          <p style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>
            Converted: {convertedValue}
          </p>
        </div>
      );
};

export default Hw4;