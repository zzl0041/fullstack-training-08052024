import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const ColorComponent = ({ name, color, onChangeName }) => {
  return (
    <div
      style={{
        border: '2px solid #d9d9d9',
        padding: '20px',
        backgroundColor: color,
        height: '200px',
      }}
    >
      <p>Component name:</p>
      <Input value={name} onChange={(e) => onChangeName(e.target.value)} />
    </div>
  );
};

ColorComponent.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
};

export default ColorComponent;
