import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import EnvVariablesPage from "../pages/EnvVariablesPage";
import NodeAPIPage from "../pages/NodeAPIPage";
import NoPage from "../pages/NoPage";

const RouterRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="env-variables" element={<EnvVariablesPage />} />
          <Route path="node-api" element={<NodeAPIPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterRoutes;
