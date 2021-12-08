import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//styling
import { LogOutButton } from "./style";


const SignOut = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <LogOutButton
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </LogOutButton>
    )
  );
};

export default SignOut;