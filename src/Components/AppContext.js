import React, { createContext, useContext } from "react";

const Appcontext = createContext({});

export const useApplicationContext = () => {
  const context = useContext(Appcontext);

  return context;
};

export { Appcontext };
