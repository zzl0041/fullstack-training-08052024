import React, { useRef, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState("0");
  const [remaining, setRemaining] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const handleStart = () => {
    const parsedSeconds = parseFloat(seconds);

    if (!Number.isNaN(parsedSeconds) && parsedSeconds > 0) {
      setRemaining(parsedSeconds);
      setIsRunning(true);

      if (timerRef.current) clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev !== null && prev > 0) {
            return Math.max(0, parseFloat((prev - 0.1).toFixed(1)));
          } else {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return 0;
          }
        });
      }, 100);
    }
  };

  // Calculate progress percentage
  const progress = remaining !== null && parseFloat(seconds) > 0
    ? (remaining / parseFloat(seconds)) * 100
    : 0;

  return (
    <div>
      <input
        type="text"
        placeholder="Set time in seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />

      {/* Progress Bar */}
      {isRunning && (
        <div style={{ width: "100%", height: "10px", background: "#ddd" }}>
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "blue",
              transition: "width 0.1s linear",
            }}
          />
        </div>
      )}

      {remaining !== null && remaining > 0 ? (
        <h1>{remaining.toFixed(1)}</h1>
      ) : (
        <h1>Time up</h1>
      )}

      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
    </div>
  );
}
