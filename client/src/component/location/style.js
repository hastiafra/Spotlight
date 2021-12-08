import styled from "styled-components";



export const Label = styled.label`
margin: 150px 20px 10px;
text-align:center;
font-weight:700;

@media (min-width: 780px) {
  margin: 10px 20px 10px;
  font-size:20px;
  }
  

`


export const Para = styled.p`
margin: 150px 20px 10px;
text-align:center;
font-weight:700;

@media (min-width: 780px) {
margin: 10px 20px 10px;
font-size:20px;
}


`

export const ImgMobile = styled.img`
  width: 60px;
  position: fixed;
  display: inline-block;
  right: 50px;
  top: 50px;

  transition: 300ms ease;

  &:hover {
    width: 70px;
  }

  @media (min-width: 780px) {
  display:none;
    }
  
`;

export const Sidebar = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
