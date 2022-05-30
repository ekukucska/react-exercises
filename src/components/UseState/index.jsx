import React, { useState } from "react";

// Functional updates:
// If the new state is computed using the previous state, 
// you can pass a function to setState.
// The function will receive the previous value, and return an updated value.

const UseState = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  }
  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  }
  const resetCount = () => {
    setCount(0);
  }

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={increaseCount}>Icrease count</button>
      <button onClick={resetCount}>Reset count</button>
      <button onClick={decreaseCount}>Decrease count</button>
    </>
  );
};

export default UseState;
