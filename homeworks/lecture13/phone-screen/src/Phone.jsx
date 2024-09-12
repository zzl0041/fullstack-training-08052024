import { useState } from "react";
import "./Phone.css";

const Phone = () => {
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleClick = (number) => {
    setClickedButtons((prev) => [...prev, number]);
  };

  return (
    <div className="phone-screen">
      <div className="screen-content">
        <div className="status-bar">
          {clickedButtons.length > 0
            ? `${clickedButtons.join("")}`
            : "status bar"}
        </div>
        <div className="button-grid">
          {[...Array(20).keys()].map((i) => (
            <button
              key={i + 1}
              className="number-button"
              onClick={() => handleClick(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phone;
