import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>HEADER</h1>
      <Link to="/">Home</Link>
      <Outlet />
    </>
  );
};

export default Layout;
