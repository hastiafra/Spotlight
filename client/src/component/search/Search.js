import React, { useContext, useEffect, useState } from "react";


//auth0
import { useAuth0 } from "@auth0/auth0-react";

const Search = () =>{
    const { user, isAuthenticated } = useAuth0();

return(
<h1>search</h1>

)


}

export default Search