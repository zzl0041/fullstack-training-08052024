import React, { useState } from 'react';

const ColorComponent = ({ name, color }) => {
  const [componentName, setComponentName] = useState(name);

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h3>{componentName}</h3>

      {/* Input bar to change the component name */}
      <input
        type="text"
        value={componentName}
        onChange={(e) => setComponentName(e.target.value)}
      />

      {/* Square showing the selected color */}
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color || 'grey',
          margin: '10px auto',
          border: '1px solid black',
        }}
      ></div>
    </div>
  );
};

export default ColorComponent;
