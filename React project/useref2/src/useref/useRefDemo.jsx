import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef Demo</h2>
      <input ref={inputRef} type="text" placeholder="Enter text..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}


