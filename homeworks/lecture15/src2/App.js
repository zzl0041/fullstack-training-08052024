import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Card />} />
        <Route path="/blue/:index" element={<Card color_="blue" />} />
        <Route path="/red/:index" element={<Card color_="red" />} />
        <Route path="/yellow/:index" element={<Card color_="yellow" />} />
        <Route path="/purple/:index" element={<Card color_="purple" />} />
        <Route path="/pink/:index" element={<Card color_="pink" />} />
        <Route path="/green/:index" element={<Card color_="green" />} />
      </Routes>
    </Router>
  );
}

const Card = function({color_}) {
  const {index: index_} = useParams();
  const [value, setValue] = useState(new Array(6).fill("")); 
  const [bg, setBg] = useState(new Array(6).fill("white")); 
  const [color, setColor] = useState("blue"); 
  const [selectedIndex, setSelectedIndex] = useState(0); 

  const handleOnchange = (item, val) => {
    const newArray = [...value]; 
    newArray[item] = val; 
    setValue(newArray);
  };

  useEffect(()=>{
    if (index_ !== undefined && color_ !== undefined){
      const newArray = [...bg]
      newArray[Number(index_)] = color_ 
      setBg(newArray)
    }
  },[index_, color_])
  

  const handleColorChange = (e) => {
    setColor(e.target.value); 
    if (selectedIndex !== null) {
      const newBgArray = [...bg]; 
      newBgArray[selectedIndex] = e.target.value; 
      setBg(newBgArray); 
    }
  };

  const handleSelectedChange = (e) => {
    setSelectedIndex(Number(e.target.value)); 
  };

  const nums = [0, 1, 2, 3, 4, 5]; 

  return (
    <div>
      <select className="choose" onChange={handleSelectedChange}>
        {nums.map((item) => (
          <option key={item} value={item}>
            {value[item] || `Option ${item + 1}`} 
          </option>
        ))}
      </select>

      <select className="color" value={color} onChange={handleColorChange}>
        <option value="blue">blue</option>
        <option value="red">red</option>
        <option value="yellow">yellow</option>
        <option value="purple">purple</option>
        <option value="pink">pink</option>
        <option value="green">green</option>
      </select>

      <div className="input">
      {nums.map((item) => (
        <div
          key={item}
          style={{
            backgroundColor: bg[item], 
            marginBottom: "10px",
            display: "block"
          }}
        >
          <input
            onChange={(e) => handleOnchange(item, e.target.value)}
            placeholder={`Enter text for option ${item + 1}`}
          />
        </div>
      ))}
      </div>
    </div>
  );
}
