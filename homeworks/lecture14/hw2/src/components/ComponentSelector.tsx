import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface ComponentSelectorProps {
  selectedComponent: string;
  components: string[];
  onComponentChange: (value: string) => void;
}

const ComponentSelector: React.FC<ComponentSelectorProps> = ({
  selectedComponent,
  components,
  onComponentChange,
}) => {
  return (
    <Select
      value={selectedComponent}
      onChange={onComponentChange}
      style={{ width: 200 }}
    >
      {components.map((comp, index) => (
        <Option key={index} value={comp}>
          {comp}
        </Option>
      ))}
    </Select>
  );
};

export default ComponentSelector;
