import React, { createContext, useState, useEffect } from "react";

export const AnonymousUserContext = createContext();


export const AnonymousUserContextProvider = ({ children }) => {
  
    const [anonymousUser, setAnonymousUser]=useState([])
  
    return (
      <AnonymousUserContext.Provider value={{ anonymousUser, setAnonymousUser }}>
        {children}
      </AnonymousUserContext.Provider>
    );
  };