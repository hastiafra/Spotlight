import React from "react";
import spotLight from "../assets/spotLight.png"
import styled from "styled-components";
import { keyframes } from 'styled-components'

const Loading = () =>{


return(
<Wrapper>
<Img  src={spotLight}/>

</Wrapper>

)

}


export default Loading;


const loadingProgress = keyframes`

0% { transform: rotate(0deg)}

25%{transform: rotate(20deg)}

50%{ transform: rotate(0deg)}

75%{transform: rotate(-20deg)}

100%{ transform: rotate(0deg)}

`



const Img = styled.img`

width:130px;
animation-name:${loadingProgress};
transition: 200ms ease;
animation-duration: 7s;
animation-iteration-count: infinite;

`

const Wrapper = styled.div`
background-color: rgb(38, 38, 46, 0.8);
min-height:100%;
min-width:100%;
display:flex;
align-items: center;
flex-direction: row;
justify-content: center;

`