import React from "react";

//children
import SignOut from "../signOut/SignOut"

//styling
import { Wrapper, Xwrapper, NavMenu} from "./style";

//icon
import { RiCloseFill } from "react-icons/ri";

const PhoneMenu = ({opened, setOpened}) => {




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

      <NavMenu to={"/profile"}>Profile</NavMenu>
      <NavMenu to={"/search"}>Search</NavMenu>
      <p><SignOut/></p>
      <NavMenu to={"/about"}>About</NavMenu>
    </Wrapper> :null}
    </>
  );
};

export default PhoneMenu;
