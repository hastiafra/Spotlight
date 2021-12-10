import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import spotLight from "../../assets/spotLight.png";

//children
import SignOut from "../signOut/SignOut";

//styling
import { Img, Wrapper, Nav, Container, SignIn } from "./style";

const NavMenu = ({ search }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      <Wrapper>
        <Container>
          <Img src={spotLight} />
        </Container>

        {isAuthenticated ? <Nav to={"/profile"}>Profile</Nav> : null}
        {search ? (
          <Nav to={"/location"}>Add Spot</Nav>
        ) : (
          <Nav to={"/search"}>Search</Nav>
        )}

        {isAuthenticated ? (
          <SignOut />
        ) : (
          <SignIn onClick={() => loginWithRedirect()}> Sign in</SignIn>
        )}
        <Nav to={"/about"}>About</Nav>
      </Wrapper>
    </>
  );
};

export default NavMenu;
