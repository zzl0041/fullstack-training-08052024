import { Input } from 'antd';
import React from 'react';

interface EditableComponentProps {
  name: string;
  color: string;
  onNameChange: (newName: string) => void;
}

const EditableComponent: React.FC<EditableComponentProps> = ({
  name,
  color,
  onNameChange,
}) => {
  return (
    <div
      style={{
        border: '2px solid #d9d9d9',
        padding: '16px',
        backgroundColor: color,
        height: '200px',
        width: '400px',
        marginTop: '20px',
      }}
    >
      <p>Component name:</p>
      <Input value={name} onChange={(e) => onNameChange(e.target.value)} />
    </div>
  );
};

export default EditableComponent;
