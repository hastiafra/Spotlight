import styled from "styled-components";

export const H1 = styled.h1`
  margin: 90px 50px 20px;

  @media (min-width: 780px) {
    margin: 20px;
  }
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  vertical-align:middle;

  &:hover{
    color: var(--Yellow);
  }
`;

export const Check = styled.input`
  display: inline-block;
  vertical-align: middle;
  transform: scale(1.3);
  width: 40px;
`;

export const Container = styled.div`
  margin: 10px;
`;

export const Label = styled.label`
  display: inline-block;
`;

export const Input = styled.input`
  display: inline-block;
  margin: 30px;
  border: none;
  border-bottom: solid;
  background-color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  width: 30vw;
  text-align: center;

  padding: 10px;

  &:focus {
    border: none;
    background-color: var(--Yellow);
    outline: none;
  }
  &:active {
    border: none;
    background-color: white;
  }

  @media (min-width: 780px) {
    margin: 20px 5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

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
