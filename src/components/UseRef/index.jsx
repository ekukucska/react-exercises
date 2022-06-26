import React, { useRef, useState } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(0);
  const inputFocus = useRef(null);
  const buttonClicksCounter = useRef(0);

  const onButtonClick = () => {
    inputFocus.current.focus();
    buttonClicksCounter.current++;
    console.log("Button clicks counter:", buttonClicksCounter.current);
  };

  console.log("Component was rendered!");
  console.log('Counter:', counter);

  return (
    <>
      <div>Clicking the button puts the input area into a 'focused' state.</div>
      <br />
      <input ref={inputFocus} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <h4>Number of button clicks: {buttonClicksCounter.current}</h4>
      <p><i>*The value is actualized only when the component is re-rendered (e.g. if you change the value of the counter below that uses useState).</i></p>
      <h4>Counter: {counter}</h4>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase Counter</button>
      <button onClick={() => setCounter(0)}>Reset Counter</button>
    </>
  );
};

export default UseRef;
