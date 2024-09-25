import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const colorOptions = [
  'antiquewhite', 'azure', 'blueviolet', 'chocolate',
  'cornflowerblue', 'crimson', 'dodgerblue', 'forestgreen', 'navy'
];

const ColorSelector = ({ onChangeColor }) => {
  const [selectedColor, setSelectedColor] = useState('Choose Color');

  const handleColorChange = (color) => {
    onChangeColor(color);
    setSelectedColor('Choose Color');
  };

  return (
    <Select
      value={selectedColor}
      onChange={handleColorChange}
      className="custom-select" 
      style={{ width: 200 }}
    >
      <Option value='Choose Color' disabled>Choose Color</Option>

      {colorOptions.map((color) => (
        <Option key={color} value={color}>
          {color}
        </Option>
      ))}
    </Select>
  );
};
ColorSelector.propTypes = {
    onChangeColor: PropTypes.func.isRequired,
};

export default ColorSelector;
