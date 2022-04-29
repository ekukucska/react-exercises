import { useState } from 'react';

const ErrorBoundaryTest = () => {
  const [state, setState] = useState(false);

  const actionHandler = () => {
    setState(true);
  };

  if (state) {
    throw new Error('Fake error!');
  };

  return (
    <>
      <h1>Error Boundary</h1>
      <h3>Click to test Error Boundary:</h3>
      <button onClick={actionHandler}>FAKE ERROR</button>
    </>
  );
};

export default ErrorBoundaryTest;
