// import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../src/features/counter/counterSlice"
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}> + </button>

      <p>Count: {count}</p>

      <button onClick={handleDecrementClick}> - </button>
    </div>
  );
}

export default App;

     
        /* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */
    
