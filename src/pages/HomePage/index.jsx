import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ul><h3>Topics:</h3></ul>
      <li><Link to="/react-hooks">React Hooks Page</Link></li>
      <li><Link to="/env-variables">Env Variables Page</Link></li>
      <li><Link to="/node-api">Node API Response Page</Link></li>
      <li><Link to="/error-boundary">Error Boundary Page</Link></li>
    </>
  );
};

export default HomePage;
