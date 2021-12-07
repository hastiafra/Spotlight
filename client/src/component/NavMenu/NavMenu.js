import React from "react";

import spotLight from "../../assets/spotLight.png"

//children
import SignOut from "../signOut/SignOut"

//styling
import {Img, Wrapper, Nav, Container} from "./style"


const NavMenu = () =>{


return(<Wrapper>
    <Img src={spotLight}/>

<Container>
    <Nav to={"/profile"}>Profile</Nav>
      <Nav to={"/search"}>Search</Nav>
      <p><SignOut/></p>
      <Nav to={"/about"}>About</Nav>
</Container>
   </Wrapper>


)


}


export default NavMenu