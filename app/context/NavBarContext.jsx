import React, { createContext, useContext, useState } from 'react';

const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [active, setActive] = useState(true);

  return (
    <NavBarContext.Provider value={{ active, setActive }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavbar = () => {
  return useContext(NavBarContext);
};
