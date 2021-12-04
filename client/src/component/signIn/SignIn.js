import React from "react";
import spotLight from "../../assets/spotLight.png";

//icons
import { RiUserFollowLine, RiUserSearchLine } from "react-icons/ri";


//styling
import { Logo, Wrapper, Para, Button, Overlay, LogIn, Icon } from "./style";

const SignIn = () => {
  return (
    <>
      <Overlay />
      <Wrapper>

        <Logo src={spotLight} />

        <Para>Find and share your favorite spots in your community!</Para>

        <Button>Learn more</Button>

       <LogIn> <Icon><RiUserFollowLine color={"black"} size={30} /></Icon> Sign in</LogIn>

        <LogIn> <Icon><RiUserSearchLine color={"black"} size={30} /></Icon> Continue as guest</LogIn>

      </Wrapper>
    </>
  );
};

export default SignIn;
