import React from "react";
import { REACT_APP_TEST_API_URL } from "../../constants/environmentVariables";
import useFetch from "../../utils/useFetch";

const NodeAPI = () => {
  const { data, error, loading } = useFetch(REACT_APP_TEST_API_URL);

  if (error) {
    console.log(error);
  }

  return (
    <>
      <h3>Node API Results:</h3>
      {loading && <div>Loading...</div>}
      <p>{data}</p>
    </>
  );
};

export default NodeAPI;
