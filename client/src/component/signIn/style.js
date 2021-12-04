import styled from "styled-components";
import location from "../../assets/location.jpg"
import network from "../../assets/network.png" 

export const Back =styled.div`
position:absolute;
min-height:100vh;
opacity:0.5;
top:0;
right:0;
width:100vw;
background-color:var(--DarkGray);


`

export const Button = styled.button`
background-color:var(--LightGray);
color:black;
border:none;
padding: 15px 20px;
border-radius: 15px;
font-size:18px;
font-family:'Righteous', cursive;
margin:20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
z-index:20;


transition: 600ms ease;

&:hover {
  background:black; ;
  box-shadow: none;
  color:var(--LightGray);
  padding: 15px 25px;
}

@media (min-width: 780px) {
    margin:10px;
    padding: 20px 35px;
    font-size:30px;
    border-radius:20px;
  }

`

export const Para = styled.p`
text-align:center;
padding:20px 40px;
font-weight:700;
z-index:20;
color:var(--Gray);

@media (min-width: 780px) {
    font-size: 40px;
    padding:40px 60px;
  }

`


export const Logo = styled.img`
margin-top:30px;
height:100px;
z-index:20;
text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;


@media (min-width: 780px) {
    height: 200px;
  }

`

export const Wrapper = styled.div`
background-image: url(${network});
min-height:100vh;
display:flex;
flex-direction: column;
align-content: center;
align-items: center;
justify-content: flex-start;
background-repeat: no-repeat;
background-size: cover;

`