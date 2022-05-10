import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const UseContext = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const setDarkTheme = ()=> {
    setTheme('theme-dark');
  }
  const setLightTheme = ()=> {
    setTheme('theme-light');
  }

  return (
    <>
      <h1>useContext Hook</h1>
      <h3>useContext:</h3>
      <br/>
      <div>useContext value: {theme}</div>
      <br/>      
      <button onClick={setLightTheme}>Change Theme to LIGHT</button>
      <br />
      <button onClick={setDarkTheme}>Change Theme to DARK</button>
    </>
  );
};

export default UseContext;
