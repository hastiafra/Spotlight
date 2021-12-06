import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import spotLight from "../../assets/spotLight.png"


//styling
import {
 Sidebar,
 Img,

} from "./style";

//icons
import {FaHamburger} from "react-icons/fa"

const Location = ()=>{

    const { user, isAuthenticated } = useAuth0();

   if (isAuthenticated){


   }

   

return(
    <>
    <Sidebar><Img src={spotLight} /></Sidebar>
    </>
)



}

export default Location