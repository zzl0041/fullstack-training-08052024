import { useState } from 'react';

const CardDropDown = ({ options, handleChange }) => {
  return (
    <>
      <select onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

const ColorDropDown = ({ colors, handleChange, selectedColor }) => {
  return (
    <>
      <select value={selectedColor} onChange={handleChange}>
        <option value=''>Choose Color</option>
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
    </>
  );
};

const Card = ({ cardName, cardId, updateCardName, color }) => {
  const handleInputChange = (event) => {
    updateCardName(cardId, event.target.value);
  };
  return (
    <div
      className='card'
      style={{
        backgroundColor: `${color}`,
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <p> Component name: </p>
      <input type={'text'} value={cardName} onChange={handleInputChange} />
    </div>
  );
};

export default function App() {
  const [cards, setCards] = useState([
    { id: 1, name: 'one', color: 'white' },
    { id: 2, name: 'two', color: 'white' },
    { id: 3, name: 'three', color: 'white' },
    { id: 4, name: 'four', color: 'white' },
    { id: 5, name: 'five', color: 'white' },
    { id: 6, name: 'six', color: 'white' },
  ]);

  const [selectedCard, setSelectedCard] = useState(cards[0].id);
  const [selectedColor, setSelectedColor] = useState('');

  const colors = [
    'lightgreen',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
  ];

  const handleCardDropdownChange = (event) => {
    setSelectedCard(Number(event.target.value));
  };

  const handleColorDropdownChange = (event) => {
    const newColor = event.target.value;
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === selectedCard ? { ...card, color: newColor } : card
      )
    );

    setSelectedColor('');
  };

  const updateCardName = (id, newName) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, name: newName } : card
      )
    );
  };

  return (
    <div className='App'>
      <div className='select-container'>
        <CardDropDown options={cards} handleChange={handleCardDropdownChange} />
        <ColorDropDown
          colors={colors}
          handleChange={handleColorDropdownChange}
          selectedColor={selectedColor}
        />
      </div>
      <div className='card-container'>
        {cards.map((card) => (
          <Card
            key={card.id}
            cardId={card.id}
            cardName={card.name}
            color={card.color}
            updateCardName={updateCardName}
          />
        ))}
      </div>
    </div>
  );
}
