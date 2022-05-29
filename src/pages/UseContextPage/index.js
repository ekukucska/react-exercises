import React from 'react';
import ThemeContext from '../../components/UseContext/ThemeContext';
import UserContext from '../../components/UseContext/UserContext';

const UseContextPage = () => {
  return (
    <>
      <ThemeContext />
      <UserContext />
    </>
  );
};

export default UseContextPage;