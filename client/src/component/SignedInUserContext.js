import React, { createContext, useState, useEffect } from "react";

export const SignedInUserContext = createContext();

export const SignedInUserContextProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState([]);

 

  return (
    <SignedInUserContext.Provider value={{ signedInUser, setSignedInUser }}>
      {children}
    </SignedInUserContext.Provider>
  );
};
