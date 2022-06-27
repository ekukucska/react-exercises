import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import ContextProviders from "../context";
import Layout from "../components/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const EnvVariablesPage = lazy(() => import("../pages/EnvVariablesPage"));
const NodeAPIPage = lazy(() => import("../pages/NodeAPIPage"));
const ErrorBoundaryPage = lazy(() => import("../pages/ErrorBoundaryPage"));
const ReactHooksPage = lazy(() => import("../pages/ReactHooksPage"));
const UseStatePage = lazy(() => import("../pages/UseStatePage"));
const UseEffectPage = lazy(() => import("../pages/UseEffectPage"));
const UseContextPage = lazy(() => import("../pages/UseContextPage"));
const UseMemoPage = lazy(() => import("../pages/UseMemoPage"));
const UseCallbackPage = lazy(() => import("../pages/UseCallbackPage"));
const UseRefPage = lazy(() => import("../pages/UseRefPage"));
const NoPage = lazy(() => import("../pages/NoPage"));

const RouterRoutes = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
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
                <Route path="usestate-hook" element={<UseStatePage />} />
                <Route path="useeffect-hook" element={<UseEffectPage />} />
                <Route path="usecontext-hook" element={<UseContextPage />} />
                <Route path="usememo-hook" element={<UseMemoPage />} />
                <Route path="usecallback-hook" element={<UseCallbackPage />} />
                <Route path="useref-hook" element={<UseRefPage />} />
              </Route>
              <Route path="*" element={<NoPage />} />
            </Routes>
          </ContextProviders>
        </Router >
      </Suspense>
    </ErrorBoundary>
  );
};

export default RouterRoutes;
