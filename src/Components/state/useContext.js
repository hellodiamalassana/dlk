import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [coords, setCoords] = useState({ varX: 0, varY: 0 });

  // Shine effecT
  const handleShine = (e) => {
    let contact = document.querySelector(".contact");
    if (contact) {
      let varX = contact.getBoundingClientRect().left;
      let varY = contact.getBoundingClientRect().top + 100;
      setCoords({ varX, varY });

      contact.style.setProperty("--x", varX + "px");
      contact.style.setProperty("--y", varY + "px");
    } else {
      return;
    }
  };

  useEffect(() => {
    handleShine();
  }, []);

  return (
    <AppContext.Provider value={{ coords }}>{children}</AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
