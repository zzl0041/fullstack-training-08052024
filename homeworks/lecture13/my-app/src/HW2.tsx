import { useState, useEffect } from "react";
import "./HW2.css";

function HW2() {
  const [status, setStatus] = useState<number[]>([]);
  const [currentStatus, setCurrentStatus] = useState<number>(0);

  useEffect(() => {
    setStatus(Array.from({length: 20}, (_, i) => i + 1));
  }, []);

  return (
    <div className="phone">
      <div className="screen">
        <div className="status-bar">
          <h3>status bar: {currentStatus ? currentStatus : ""}</h3>
        </div>
        <div className="op-area">
          {status.map((elm) => (
            <div key={elm} className="button-square" onClick={() => setCurrentStatus(elm)}>
              <p>{elm}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HW2;
