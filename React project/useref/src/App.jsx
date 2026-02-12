import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const val = useRef(0);
  const btnRef = useRef(null);

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("value of val:", val.current);
    setCount(count + 1);
  }

  useEffect(() => {
  console.log("Count changed:", count);
}, [count]);


  function changeColor() {
   
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <button 
      ref = {btnRef}
      onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <button onClick={changeColor}>
        Change color of 1st button
      </button>

<br/>
      <div>
        count: {count}
      </div>
    </div>
  );
}

export default App;


