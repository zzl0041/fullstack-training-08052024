import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const BoxSelector = ({ selectedBox, boxes, onChangeBox }) => {
  return (
    <Select
      value={selectedBox}
      onChange={onChangeBox}
      className="custom-select"  
      style={{ width: 200 }}
    >
      {boxes.map((comp, index) => (
        <Option key={index} value={comp}>
          {comp}
        </Option>
      ))}
    </Select>
  );
};

BoxSelector.propTypes = {
  selectedBox: PropTypes.string.isRequired,
  boxes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeBox: PropTypes.func.isRequired,
};

export default BoxSelector;
