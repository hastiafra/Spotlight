import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import LoginProvider from "./LoginProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { SignedInUserContextProvider } from "./component/SignedInUserContext";
import { AnonymousUserContextProvider } from "./component/AnonymousUserContext";

ReactDOM.render(
  <Router>
    <LoginProvider>
      <SignedInUserContextProvider>
        <AnonymousUserContextProvider>
          <App />
        </AnonymousUserContextProvider>
      </SignedInUserContextProvider>
    </LoginProvider>
  </Router>,
  document.getElementById("root")
);
