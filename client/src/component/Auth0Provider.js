import React from "react";
import { useHistory } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";


const Auth0Provider = ({children})=>{

    const history = useHistory();
    const domain = REACT_APP_AUTH0_DOMAIN;
    const clientId = REACT_APP_AUTH0_ClIENT_ID;

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
      };


}