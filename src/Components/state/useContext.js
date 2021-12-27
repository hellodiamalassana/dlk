import React, { createContext, useContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const pageVariants = {
    off: { opacity: 0, y: -25 }, // x: "-25"
    on: { opacity: 1, y: 0 }, // x: 0
  };

  const pageTransitions = {
    type: "tween", // "spring"
    // stiffness: 85,
    // ease: "anticipate", // "easeOut",
    // duration: 0.5,
  };

  return (
    <AppContext.Provider value={{ pageVariants, pageTransitions }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
