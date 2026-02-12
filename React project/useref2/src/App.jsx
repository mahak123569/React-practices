import { useState, useRef } from "react";
import "./App.css";


function App() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  }

  return (
    <div>
      <h1>Stopwatch: {time} seconds</h1>

      <button onClick={startTimer}>Start</button>
      <br /><br />

      <button onClick={stopTimer}>Stop</button>
      <br /><br />

      <button onClick={resetTimer}>Reset</button>
      <br /><br />

      
    </div>
  );
}

export default App;



