import React, { useContext, useEffect, useReducer } from "react";
import { reducerName } from "../../reducers";
import LocalizationContext from "../../context/LocalizationContext";
import UseReducerWithUseContext from "../UseReducerWithUseContext";

const initialStateName = { name: null, age: null };

const UseReducer = () => {
  const [stateName, dispatchName] = useReducer(reducerName, initialStateName);
  const { stateLocalization } = useContext(LocalizationContext);

useEffect(()=>{
  console.log(stateName);
},[stateName])

  return (
    <>
      <h4>useReducer:</h4>
      <p>Name: {stateName.name}</p>
      <p>Age: {stateName.age}</p>
      <button onClick={()=>dispatchName("John")}>John</button>
      <button onClick={()=>dispatchName("Billy")}>Billy</button>
      <h4>useReducer with useContext:</h4>
      <p>Country: {stateLocalization.country}</p>
      <p>Language: {stateLocalization.language}</p>
      <UseReducerWithUseContext />
      <br/>
    </>
  );
};

export default UseReducer;
