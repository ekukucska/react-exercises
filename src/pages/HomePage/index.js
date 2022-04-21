import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ul>Topics:</ul>
      <li><Link to="/env-variables">EnvVariablesPage</Link></li>
    </>
  );
};

export default HomePage;
