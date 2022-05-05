import React from 'react';
import { Link } from 'react-router-dom';

const ReactHooksPage = () => {
  return (
    <>
      <h1>React Hooks Page</h1>
      <ul><h3>Featured Hooks:</h3></ul>
      <li><Link to="/react-hooks/usecontext-hook">useContext Hook</Link></li>
    </>
  );
};

export default ReactHooksPage;