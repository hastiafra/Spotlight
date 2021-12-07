import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const Nav = styled(NavLink)`
  color: var(--ghostWhite);
  text-decoration: none;
  padding: 45px;
  font-size: 20px;
`;

export const Img = styled.img`
  width: 150px;
  transition: 300ms ease;
  display: none;

  @media (min-width: 780px) {
    display: inline-block;
  }
`;

export const Wrapper = styled.div`
  display: none;

  @media (min-width: 780px) {
    display: flex;
    position: sticky;
    right: 100px;
    min-width: 70vw;
    flex-direction: row;
    min-height: 15vh;
    border-radius: 110px;
    margin: 50px;
    background-color: gray;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    flex-direction: row-reverse;
  }
`;
