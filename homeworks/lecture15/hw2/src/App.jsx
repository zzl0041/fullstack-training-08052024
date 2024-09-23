import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Navigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

const CardDropDown = ({ options, handleChange, selectedCard }) => {
  return (
    <>
      <select value={selectedCard} onChange={handleChange}>
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

const MainContent = ({ cards, setCards }) => {
  const [selectedCard, setSelectedCard] = useState(cards[0].id);
  const [selectedColor, setSelectedColor] = useState('');

  const colors = [
    'lightgreen',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
  ];

  const { cardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedCard(Number(cardId));
  }, [cardId]);

  const handleCardDropdownChange = (event) => {
    const newSelectedCard = Number(event.target.value);
    setSelectedCard(newSelectedCard);
    navigate(`/${newSelectedCard}`);
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

  const displayedCards = cards.filter((card) => card.id === selectedCard);

  return (
    <div className='App'>
      <div className='select-container'>
        <CardDropDown
          options={cards}
          handleChange={handleCardDropdownChange}
          selectedCard={selectedCard}
        />
        <ColorDropDown
          colors={colors}
          handleChange={handleColorDropdownChange}
          selectedColor={selectedColor}
        />
      </div>
      <div className='card-container'>
        {displayedCards.map((card) => (
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
};

export default function App() {
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem('cards');
    return storedCards
      ? JSON.parse(storedCards)
      : [
          { id: 1, name: 'one', color: 'white' },
          { id: 2, name: 'two', color: 'white' },
          { id: 3, name: 'three', color: 'white' },
          { id: 4, name: 'four', color: 'white' },
          { id: 5, name: 'five', color: 'white' },
          { id: 6, name: 'six', color: 'white' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/1' />} />
        <Route
          path='/:cardId'
          element={<MainContent cards={cards} setCards={setCards} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
