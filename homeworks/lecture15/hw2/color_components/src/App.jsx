import { Col, Row } from 'antd';
import React, { useState, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ColorSelector from './components/ColorSelector';
import BoxSelector from './components/BoxSelector';
import ColorComponent from './components/ColorComponent';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    { name: 'first', color: 'white' },
    { name: 'second', color: 'white' },
    { name: 'third', color: 'white' },
    { name: 'fourth', color: 'white' },
    { name: 'fifth', color: 'white' },
    { name: 'sixth', color: 'white' },
  ]);

  const [activeItem, setActiveItem] = useState('first');
  const [currentColor, setCurrentColor] = useState('white');
  const navigate = useNavigate();

  const updateActiveItem = useCallback((newActiveItem) => {
    setActiveItem(newActiveItem);
    const foundItem = items.find(item => item.name === newActiveItem);
    if (foundItem) {
      setCurrentColor(foundItem.color);
      navigate(`/${newActiveItem}`);
    }
  }, [items, navigate]);

  const updateCurrentColor = useCallback((newColor) => {
    setCurrentColor(newColor);
    setItems((prevItems) => {
      const currentActiveItem = activeItem;
      return prevItems.map((item) =>
        item.name === currentActiveItem ? { ...item, color: newColor } : item
      );
    });
  }, [activeItem]);

  const updateItemName = useCallback((newName, index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = { ...updatedItems[index], name: newName };
      if (activeItem === prevItems[index].name) {
        setActiveItem(newName);
        navigate(`/${newName}`);
      }
      return updatedItems;
    });
  }, [activeItem, navigate]);

  return (
    <div className="app-container">
      <Row gutter={18} justify="space-around" className="top-row">
        <Col span={5}>
          <BoxSelector
            selectedBox={activeItem}
            boxes={items.map((item) => item.name)}
            onChangeBox={updateActiveItem}
          />
        </Col>
        <Col span={7}>
          <ColorSelector
            selectedColor={currentColor}
            onChangeColor={updateCurrentColor}
          />
        </Col>
      </Row>
      
      <Routes>
        {items.map((item, idx) => (
          <Route
            key={idx}
            path={`/${item.name}`}
            element={
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ColorComponent
                  name={item.name}
                  color={item.color}
                  onChangeName={(newName) => updateItemName(newName, idx)}
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
