import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface ColorSelectorProps {
  selectedColor: string;
  onColorChange: (value: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  selectedColor,
  onColorChange,
}) => {
  return (
    <Select
      value={selectedColor}
      onChange={onColorChange}
      style={{ width: 200 }}
    >
      <Option value='antiquewhite'>antiquewhite</Option>
      <Option value='azure'>azure</Option>
      <Option value='blueviolet'>blueviolet</Option>
      <Option value='chocolate'>chocolate</Option>
      <Option value='cornflowerblue'>cornflowerblue</Option>
      <Option value='crimson'>crimson</Option>
      <Option value='dodgerblue'>dodgerblue</Option>
      <Option value='forestgreen'>forestgreen</Option>
      <Option value='navy'>navy</Option>
    </Select>
  );
};

export default ColorSelector;
