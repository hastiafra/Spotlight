import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const SignOut = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <LogOutButton
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </LogOutButton>
    )
  );
};

export default SignOut;