import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import LoginProvider from "./LoginProvider";
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
  <LoginProvider>
    <App />
  </LoginProvider>
  </Router>,
  document.getElementById("root")
);


