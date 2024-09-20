import { Routes, Route, useNavigate, Link, Outlet } from 'react-router-dom';
import { Selector, ColorSelector, Card } from './components/hw2Components';
import './styles-hw2.css';
import { useState } from 'react';

export default function App() {
  const selections = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

  const colors = [
    'antiquewhite',
    'azure',
    'blueviolet',
    'chocolate',
    'cornflowerblue',
    'crimson',
    'dodgerblue',
    'forestgreen',
    'navy',
  ];

  const [components, setComponents] = useState(
    selections.map((selection, index) => ({
      id: index + 1,
      compName: selection,
      bgColor: 'white',
    }))
  );

  const [selectedId, setSelectedId] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');

  const navigate = useNavigate();

  const handleCardSelection = (e) => {
    const path = e.target.value;
    setSelectedId(path - 1);
    navigate(path);
  };

  const handleColorChange = (e) => {
    const curColor = e.target.value;
    setSelectedColor(curColor);
    const newComponents = [...components];
    newComponents[selectedId].bgColor = curColor;
    setComponents(newComponents);
    setSelectedColor('');
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='hw2'>
            <div className='dropdowns'>
              <Selector
                labels={selections}
                handleChange={handleCardSelection}
              />
              <ColorSelector
                colors={colors}
                handleChange={handleColorChange}
              />
            </div>
            <Outlet />
          </div>
        }
      >
        {components.map((component, index) => (
          <Route
            path={component.id.toString()}
            element={
              <Card
                key={index}
                header={component.compName}
                color={component.bgColor}
              />
            }
          />
        ))}
      </Route>
    </Routes>
  );
}
