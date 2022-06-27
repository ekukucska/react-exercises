import React from "react";
import {
  REACT_APP_TITLE,
  REACT_APP_DESCRIPTION,
  REACT_APP_DEV_MODE,
  REACT_APP_PRO_MODE,
} from "../../constants/EnvironmentalVariables";
import getEnvironment from "../../utils/getEnviroment";

const EnvVariables = () => {
  return (
    <>
      <h1>{REACT_APP_TITLE}</h1>
      <h3>{REACT_APP_DESCRIPTION}:</h3>

      {process.env.NODE_ENV === "development"
        ? REACT_APP_DEV_MODE
        : REACT_APP_PRO_MODE}
      <br />
      <br />
      <div>TEST - getEnvironment: {getEnvironment()}</div>
    </>
  );
};

export default EnvVariables;
