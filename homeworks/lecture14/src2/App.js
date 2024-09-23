import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(new Array(6).fill("")); 
  const [bg, setBg] = useState(new Array(6).fill("white")); 
  const [color, setColor] = useState("blue"); 
  const [selectedIndex, setSelectedIndex] = useState(null); 

  const handleOnchange = (item, val) => {
    const newArray = [...value]; 
    newArray[item] = val; 
    setValue(newArray);
  };

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
