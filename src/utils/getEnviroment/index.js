import {
  REACT_APP_DEV_MODE,
  REACT_APP_PRO_MODE,
  REACT_APP_TEST_MODE,
} from "../../constants/EnvironmentalVariables";

const getEnvironmet = () => {
  if (process.env.NODE_ENV === "development") {
    return REACT_APP_DEV_MODE;
  }
  if (process.env.NODE_ENV === "production") {
    return REACT_APP_PRO_MODE;
  }
  if (process.env.NODE_ENV === "test") {
    return REACT_APP_TEST_MODE;
  }
};

export default getEnvironmet;
