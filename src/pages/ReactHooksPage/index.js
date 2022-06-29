import React from 'react';
import { Link } from 'react-router-dom';

const ReactHooksPage = () => {
  return (
    <>
      <h1>React Hooks Page</h1>
      <ul><h3>Featured Hooks:</h3></ul>
      <li><Link to="/react-hooks/usestate-hook">useState Hook</Link></li>
      <li><Link to="/react-hooks/useeffect-hook">useEffect Hook</Link></li>
      <li><Link to="/react-hooks/usereducer-hook">useReducer Hook</Link></li>
      <li><Link to="/react-hooks/usecontext-hook">useContext Hook</Link></li>
      <li><Link to="/react-hooks/usememo-hook">useMemo Hook</Link></li>
      <li><Link to="/react-hooks/usecallback-hook">useCallback Hook</Link></li>
      <li><Link to="/react-hooks/useref-hook">useRef Hook</Link></li>
    </>
  );
};

export default ReactHooksPage;