import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../components/Layout";
import ThemeContext from "../context/ThemeContext";
import HomePage from "../pages/HomePage";
import EnvVariablesPage from "../pages/EnvVariablesPage";
import NodeAPIPage from "../pages/NodeAPIPage";
import ErrorBoundaryPage from "../pages/ErrorBoundaryPage";
import ReactHooksPage from "../pages/ReactHooksPage";
import UseContextPage from "../pages/UseContextPage";
import NoPage from "../pages/NoPage";

const RouterRoutes = () => {
  const [theme, setTheme] = useState("theme-light");
  
  const value = useMemo(
    () => ({ theme, setTheme }), 
    [theme]
  );
  return (
    <ErrorBoundary>
      <Router>
        <ThemeContext.Provider value={{theme, setTheme}} >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="env-variables" element={<EnvVariablesPage />} />
            <Route path="node-api" element={<NodeAPIPage />} />
            <Route path="error-boundary" element={<ErrorBoundaryPage />} />
          </Route>
          <Route path="react-hooks" element={<Layout />}>
            <Route index element={<ReactHooksPage />} />
            <Route path=":react-hook" element={<UseContextPage />} />
            <Route path="usecontext-hook" element={<UseContextPage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        </ThemeContext.Provider>
      </Router >
    </ErrorBoundary>
  );
};

export default RouterRoutes;
