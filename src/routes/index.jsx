import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import EnvVariablesPage from "../pages/EnvVariablesPage";
import NodeAPIPage from "../pages/NodeAPIPage";
import ErrorBoundaryPage from "../pages/ErrorBoundaryPage";
import NoPage from "../pages/NoPage";
import ErrorBoundary from "../components/ErrorBoundary";

const RouterRoutes = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path={'/' || '/home'} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="env-variables" element={<EnvVariablesPage />} />
            <Route path="node-api" element={<NodeAPIPage />} />
            <Route path="error-boundary" element={<ErrorBoundaryPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router >
    </ErrorBoundary>
  );
};

export default RouterRoutes;