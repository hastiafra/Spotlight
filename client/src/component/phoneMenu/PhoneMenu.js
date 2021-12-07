import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//children
import SignOut from "../signOut/SignOut"

//styling
import { Wrapper, Xwrapper, NavMenu, SignIn} from "./style";

//icon
import { RiCloseFill } from "react-icons/ri";

const PhoneMenu = ({opened, setOpened}) => {



  const {isAuthenticated,  loginWithRedirect } = useAuth0();


  return (
      <>
     {opened? <Wrapper>
      <Xwrapper
        onClick={() => {
          setOpened(!opened);
        }}
      >

    <RiCloseFill size={45} color={"rgb(255, 222, 89)"} />
      </Xwrapper>
      {isAuthenticated?
      <NavMenu to={"/profile"}>Profile</NavMenu> :  <SignIn onClick={() => loginWithRedirect()}> Sign in</SignIn>}
      <NavMenu to={"/search"}>Search</NavMenu>
      <SignOut/>
      <NavMenu to={"/about"}>About</NavMenu>
    </Wrapper> :null}
    </>
  );
};

export default PhoneMenu;
