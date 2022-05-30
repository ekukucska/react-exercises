import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import ContextProviders from "../context";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import EnvVariablesPage from "../pages/EnvVariablesPage";
import NodeAPIPage from "../pages/NodeAPIPage";
import ErrorBoundaryPage from "../pages/ErrorBoundaryPage";
import ReactHooksPage from "../pages/ReactHooksPage";
import UseContextPage from "../pages/UseContextPage";
import UseStatePage from "../pages/UseStatePage";
import NoPage from "../pages/NoPage";

const RouterRoutes = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ContextProviders>
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
              <Route path="usecontext-hook" element={<UseContextPage />} />
              <Route path="usestate-hook" element={<UseStatePage />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </ContextProviders>
      </Router >
    </ErrorBoundary>
  );
};

export default RouterRoutes;
