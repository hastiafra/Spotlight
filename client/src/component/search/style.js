import styled from "styled-components";

export const H1 = styled.h1`
margin:90px 50px 20px;

@media (min-width: 780px) {
    margin:20px;
  
  }

`

export const Input = styled.input`
display: inline-block;
margin: 30px;
border: none;
border-bottom: solid;
background-color:white;
font-family: "Quicksand", sans-serif;
font-size: 15px;
width:50vw;
text-align:center;

padding:10px;


&:focus{
  border: none;
  background-color:var(--Yellow)
}
&:active{
  border: none;
  background-color:white;
}

@media (min-width: 780px) {
  margin:20px;

}
`;

export const Wrapper = styled.div`

display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center



`






export const Sidebar = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;


export const ImgMobile = styled.img`
  width: 60px;
  position: fixed;
  display: inline-block;
  right: 50px;
  top: 50px;
  z-index:99;

  transition: 300ms ease;

  &:hover {
    width: 70px;
  }

  @media (min-width: 780px) {
  display:none;
    }
  
`;


