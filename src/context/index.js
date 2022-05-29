// combineComponents.tsx
import React, { useMemo, useState } from 'react';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';

const CombinedProviders = ({ children }) => {
  const [theme, setTheme] = useState("theme-light");
  const [user, setUser] = useState("anonymous");

  const valueTheme = useMemo(
    () => ({ theme, setTheme }),
    [theme]
  );
  const valueUser = useMemo(
    () => ({ user, setUser }),
    [user]
  );
  return (
    <ThemeContext.Provider value={valueTheme}>
      <UserContext.Provider value={valueUser}>
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default CombinedProviders;