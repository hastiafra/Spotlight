import React from "react";
import spotLight from "../../assets/spotLight.png"


//styling
import {Logo, Wrapper, Para, Button, Back} from "./style";

const SignIn = () =>{

return(
    <>
<Back></Back>
<Wrapper>

<Logo src={spotLight}/>
<Para>Find and share your favorite spots in your community!</Para>
<Button>Learn more</Button>

</Wrapper>
</>
)



}

export default SignIn;