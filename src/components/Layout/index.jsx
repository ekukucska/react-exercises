import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import "./index.css";

const Layout = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>HEADER</h1>
      <Link to="/">Home</Link>
      <Outlet />
    </div>
  );
};

export default Layout;
