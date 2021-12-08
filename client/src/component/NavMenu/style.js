import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;


export const SignIn = styled.button`

background:none;
border: none;
font-weight: 700;
font-size: 20px;
color: var(--ghostWhite);
padding: 45px;
cursor: pointer;

&:hover {
  transition: 300ms ease;
  transform: none;
  border-bottom:none;
  color: var(--Yellow);
  padding-bottom: 40px;
}


`

export const Nav = styled(NavLink)`
  color: var(--ghostWhite);
  text-decoration: none;
  padding: 45px;
  font-size: 20px;
  font-weight: 700;
  
  &:hover {
    transition: 300ms ease;
    color: var(--Yellow);
    padding-bottom: 40px;
  
}

`;

export const Img = styled.img`
  width: 150px;
  transition: 300ms ease;
  display: none;

  @media (min-width: 780px) {
    display: inline-block;
    position:absolute;
    right: -14px;
    top: -12px;
    z-index:99;
  }
`;

export const Wrapper = styled.div`
  display: none;


  @media (min-width: 780px) {
    display: flex;
    top:0;
    position: sticky;
    min-width: 70vw;
    flex-direction: row;
    min-height: 15vh;
    border-radius: 110px;
    margin:20px 70px;
    background-color: var( --Gray);
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: row-reverse;
    z-index:99;
   
    
  }
`;
