import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Context = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const setDarkTheme = () => {
    setTheme('theme-dark');
  }
  const setLightTheme = () => {
    setTheme('theme-light');
  }

  return (
    <>
      <div>useContext value: {theme}</div>
      <br />
      <button onClick={setLightTheme}>Change Theme to LIGHT</button>
      <br />
      <button onClick={setDarkTheme}>Change Theme to DARK</button>
      <br /><br />
    </>
  );
};

export default Context;
