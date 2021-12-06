import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


//icons
import {FaHamburger} from "react-icons/fa"

const Location = ()=>{

    const { user, isAuthenticated } = useAuth0();

    console.log(isAuthenticated)

return(
    <>
    <h1>location</h1>
    <div><FaHamburger color={"gray"} size={30} /></div>
    </>
)



}

export default Location