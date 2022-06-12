import React, { useMemo, useState } from "react";
import UseMemoChild from "./UseMemoChild";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [ on, setOn ] = useState(false);

  const memoizedValue = useMemo(
    () => UseMemoChild(),
    [on]
  );

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
      <h4>Untracked State Value:</h4>
      <div>Count: {count}</div>
      <button onClick={increaseCount}>Icrease count</button>
      <button onClick={resetCount}>Reset count</button>
      <button onClick={decreaseCount}>Decrease count</button>
      <br/>
      <h4>Tracked State Value:</h4>
      <div>Is ON?  { on ? 'YES' : 'NO' }</div>
      <button onClick={()=> setOn(true)}>ON</button>
      <button onClick={()=> setOn(false)}>OFF</button>
      <br/>
      <h4>Memoized value:</h4>
      <div>{memoizedValue}</div>
    </>
  );
};

export default UseMemo;
