import { useState } from "react";

// Function to convert number to ordinal
const getOrdinal = (num) => {
  let suffix = ["th", "st", "nd", "rd"],
    v = num % 100;
  return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
};

const Converter = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setNumber(value);
  };

  return (
    <div className="converter-container">
      <h1>Converter</h1>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        className="number-input"
      />
      <input
        type="text"
        value={getOrdinal(number)}
        readOnly
        className="ordinal-output"
      />
    </div>
  );
};

export default Converter;
