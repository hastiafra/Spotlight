import styled from "styled-components";

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
  z-index: 99;

  transition: 300ms ease;

  &:hover {
    width: 70px;
  }

  @media (min-width: 780px) {
    display: none;
  }
`;