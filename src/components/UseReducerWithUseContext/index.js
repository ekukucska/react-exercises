import { useContext } from 'react';
import LocalizationContext from "../../context/LocalizationContext";

const UseReducerWithUseContext = () => {
  const { dispatchLocalization } = useContext(LocalizationContext);

  return (
    <>
      <button onClick={() => dispatchLocalization( "US" )}>US</button>
      <button onClick={() => dispatchLocalization( "FR" )}>FR</button>
      <br />
    </>
  )
}

export default UseReducerWithUseContext;
