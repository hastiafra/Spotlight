import React, { createContext, useState, useEffect } from "react";

export const SignedInUserContext = createContext();

export const SignedInUserContextProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState([]);

  const [status, setStatus] = useState("loading");

  return (
    <SignedInUserContext.Provider value={{ signedInUser, setSignedInUser }}>
      {children}
    </SignedInUserContext.Provider>
  );
};
