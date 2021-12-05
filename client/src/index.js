import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
  domain="dev-xyyft-0g.us.auth0.com"
  clientId="1pKlKg8wLm6uClEBTPAsT44VqjwR3pXh"
  redirectUri={window.location.origin}>
    <App />
 
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
