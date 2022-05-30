import React from 'react';
import ThemeContext from '../../components/UseContext/ThemeContext';
import UserContext from '../../components/UseContext/UserContext';

const UseContextPage = () => {
  return (
    <>
      <h1>useContext Hook</h1>
      <h3>useContext:</h3>
      <br />
      <ThemeContext />
      <UserContext />
    </>
  );
};

export default UseContextPage;