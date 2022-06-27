import React from "react";
import { REACT_APP_TEST_API_URL } from "../../constants/EnvironmentalVariables";
import useFetch from "../../utils/useFetch";

const NodeAPI = () => {
  const { data, error, loading } = useFetch(REACT_APP_TEST_API_URL);

  if (error) {
    console.log(error);
  }

  return (
    <>
      <h1>Node API</h1>
      <h3>Data from Node API:</h3>
      {loading && <div>Loading...</div>}
      <p>{data}</p>
      <br />
      <p style={{ fontStyle: 'italic' }}>*Fetched with a custom hook that uses fetch() to get data from a Node.js/Express.js API.</p>
    </>
  );
};

export default NodeAPI;
