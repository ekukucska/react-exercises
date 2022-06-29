// combineComponents.tsx
import React, { useMemo, useReducer, useState } from 'react';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';
import LocalizationContext from './LocalizationContext';
import { reducerLocalization } from '../reducers/';

const initialStateLocalization = { country: '', language: '' };

const CombinedProviders = ({ children }) => {
  const [theme, setTheme] = useState("theme-light");
  const [user, setUser] = useState("anonymous");
  const [stateLocalization, dispatchLocalization] = useReducer(reducerLocalization, initialStateLocalization);

  const valueTheme = useMemo(
    () => ({ theme, setTheme }),
    [theme]
  );
  const valueUser = useMemo(
    () => ({ user, setUser }),
    [user]
  );

  const valueLocalization = useMemo(
    () => ({ stateLocalization, dispatchLocalization }),
    [stateLocalization]
  );

  return (
    <ThemeContext.Provider value={valueTheme}>
      <UserContext.Provider value={valueUser}>
        <LocalizationContext.Provider value={valueLocalization}>
          {children}
        </LocalizationContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default CombinedProviders;