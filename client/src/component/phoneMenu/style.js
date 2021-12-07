import styled from "styled-components";

import { useHistory, NavLink } from "react-router-dom";

export const NavMenu = styled(NavLink)`
  color:var(--ghostWhite);
  text-decoration:none;
  padding:45px;
  font-size:20px;
  font-weight: 700;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    border-bottom: dotted 3px var(--Yellow);
    padding-bottom: 10px;
    
}
`;

export const Xwrapper = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
  padding: 10px;

  transition: 300ms ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  background: black;
  min-height: 100vh;
  top: 0;
  right: 0;
  min-width: 100vw;
  z-index: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  @media (min-width: 780px) {
   display:none;
  }
`;
