import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import ColorSelector from './components/ColorSelector';
import ComponentSelector from './components/ComponentSelector';
import EditableComponent from './components/EditableComponent';

interface ComponentData {
  name: string;
  color: string;
}

const App: React.FC = () => {
  const [components, setComponents] = useState<ComponentData[]>([
    { name: 'first', color: 'white' },
    { name: 'second', color: 'white' },
    { name: 'third', color: 'white' },
    { name: 'fourth', color: 'white' },
    { name: 'fifth', color: 'white' },
    { name: 'sixth', color: 'white' },
  ]);

  const [selectedComponent, setSelectedComponent] = useState<string>('first');
  const [selectedColor, setSelectedColor] = useState<string>('white');
  const navigate = useNavigate();

  const handleComponentChange = (value: string) => {
    setSelectedComponent(value);
    navigate(`/components/${value}`);
  };

  const handleColorChange = (value: string) => {
    setSelectedColor(value);
    setComponents((prevComponents) =>
      prevComponents.map((comp) =>
        comp.name === selectedComponent ? { ...comp, color: value } : comp
      )
    );
  };

  const handleNameChange = (newName: string, index: number) => {
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents[index] = { ...updatedComponents[index], name: newName };

      if (selectedComponent === prevComponents[index].name) {
        setSelectedComponent(newName);
      }

      return updatedComponents;
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16} justify='center' style={{ marginBottom: '20px' }}>
        <Col span={4} offset={4}>
          <ComponentSelector
            selectedComponent={selectedComponent}
            components={components.map((comp) => comp.name)}
            onComponentChange={handleComponentChange}
          />
        </Col>

        <Col span={8} offset={4}>
          <ColorSelector
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
          />
        </Col>
      </Row>

      <Routes>
        {components.map((comp, index) => (
          <Route
            key={index}
            path={`/components/${comp.name}`}
            element={
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <EditableComponent
                  name={comp.name}
                  color={comp.color}
                  onNameChange={(newName) => handleNameChange(newName, index)}
                />
              </div>
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
