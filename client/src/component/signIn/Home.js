import React from "react";
import spotLight from "../../assets/spotLight.png";
import { useAuth0 } from "@auth0/auth0-react";

//icons
import { RiUserFollowLine, RiUserSearchLine } from "react-icons/ri";

//styling
import {
  Logo,
  Wrapper,
  Para,
  Button,
  Overlay,
  LogIn,
  Icon,
  Rights,
  Span
} from "./style";

const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Overlay />
      <Wrapper>
        <Logo src={spotLight} />

        <Para>Find and share your favorite spots in your community!</Para>

        <Button>Learn more</Button>

        <LogIn onClick={() => loginWithRedirect()}>
          <Icon>
            <RiUserFollowLine color={"black"} size={30} />
          </Icon>
          Sign in
        </LogIn>

        <LogIn>
          <Icon>
            <RiUserSearchLine color={"black"} size={30} />
          </Icon>
          Continue as a guest
        </LogIn>
        <Span>To use all the features we recommend to sign in </Span>
        <Rights>© 2021 Hasti Afra. All rights reserved. </Rights>
      </Wrapper>
    </>
  );
};

export default Home;
