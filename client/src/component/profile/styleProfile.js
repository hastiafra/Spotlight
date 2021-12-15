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

export const Container = styled.div`
  margin: 90px 40px 50px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  
  @media (min-width: 780px) {
    margin: 40px;
  }
  
`;

export const Check = styled.input`
  display: inline-block;
  vertical-align: middle;
  transform: scale(1.3);
  width: 40px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-right:60px;
  font-weight:700;
`;
