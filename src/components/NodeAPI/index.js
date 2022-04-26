import React, { useEffect, useState } from "react";
import { REACT_APP_TEST_API_URL } from "../../constants/environmentVariables";

const NodeAPI = () => {
  const [testAPIResponse, setTestAPIResponse] = useState("");

  const getTestAPIResponse = () => {
    fetch(REACT_APP_TEST_API_URL)
      .then((res) => res.text())
      .then((res) => setTestAPIResponse(res));
  };
  

  useEffect(() => {
    setTestAPIResponse(getTestAPIResponse());
  }, []);

  return(
    <>
      <h3>Node API Results:</h3>
      <p>{testAPIResponse}</p>
    </>
  );
};

export default NodeAPI;
