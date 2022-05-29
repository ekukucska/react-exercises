import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const Context = () => {
  const { user, setUser } = useContext(UserContext);

  const setAuthUser = ()=> {
    setUser('John Doe');
  }
  const setAnonymousUser = ()=> {
    setUser('anonymous');
  }

  return (
    <>
      <br/>
      <div>useContext value: {user}</div>
      <br/>      
      <button onClick={setAuthUser}>Change User to Authenticated</button>
      <br />
      <button onClick={setAnonymousUser}>Change User to Anonymous</button>
    </>
  );
};

export default Context;
