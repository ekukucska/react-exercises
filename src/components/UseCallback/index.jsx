import React, { useCallback, useState } from "react";

const UseCallback = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const sumFunc = (num1, num2) => {
    return (num1 + num2);
  };

  const memoizedCallback = useCallback(() => {
    console.log("memoizedCallback was triggered");
    const resp = sumFunc(numberA, numberB);
    return resp;
  }, [numberA, numberB]);

  const increaseNumberA = () => {
    setNumberA((prevValue) => prevValue + 1);
  };
  const decreaseNumberA = () => {
    setNumberA((prevValue) => prevValue - 1);
  };
  const resetNumberA = () => {
    setNumberA(0);
  };
  const increaseNumberB = () => {
    setNumberB((prevValue) => prevValue + 1);
  };
  const decreaseNumberB = () => {
    setNumberB((prevValue) => prevValue - 1);
  };
  const resetNumberB = () => {
    setNumberB(0);
  };

  console.log("useCallback component was rendered!"); // REMOVE?

  return (
    <>
      <h4>Number A: {numberA}</h4>
      <button onClick={increaseNumberA}>Increase Number A</button>
      <button onClick={resetNumberA}>Reset Number A</button>
      <button onClick={decreaseNumberA}>Decrease Number A</button>
      <br />
      <h4>Number B: {numberB}</h4>
      <button onClick={increaseNumberB}>Increase Number B</button>
      <button onClick={resetNumberB}>Reset Number B</button>
      <button onClick={decreaseNumberB}>Decrease Number B</button>
      <h4>Sum of Number A + Number B: {memoizedCallback()}</h4>
      <br />
      <p><i>*If Number A and Number B remain the same, the memoized callback function that caculates their sum, won't be called.</i></p>
    </>
  );
};

export default UseCallback;
