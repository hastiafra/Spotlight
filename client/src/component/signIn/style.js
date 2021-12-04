import styled from "styled-components";
import network from "../../assets/signIn.jpg";

export const LogIn = styled.button`
  background: none;
  border: none;
  display: inline-block;
  z-index: 22;
  cursor: pointer;
  font-weight: 700;
  margin: 20px;
  font-size: 18px;
  padding-left:15px;


  @media (min-width: 780px) {
    font-size: 30px;

  }

  transition: 200ms ease; 

  &:hover {
  
    border-bottom: solid 5px var(--Yellow);
   padding-bottom: 10px;
  }
`;

export const Icon = styled.div`
  display: inline-block;
  vertical-align: middle;
  display: none;

  transition: 500ms ease;

  ${LogIn}:hover & {
    display: inline-block;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  min-height: 100vh;
  opacity: 0.7;
  top: 0;
  right: 0;
  width: 100vw;
  background-color: white;
`;

export const Button = styled.button`
  background-color: var(--ghostWhite);
  color: var(--DarkGray);
  border: none;
  padding: 15px 20px;
  border-radius: 15px;
  font-size: 18px;
  font-family: "Righteous", cursive;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 20;
  cursor: pointer;

  transition: 500ms ease;

  &:hover {
    background: black;
    box-shadow: none;
    color: var(--Yellow);
    padding: 15px 25px;
  }

  @media (min-width: 780px) {
    margin: 20px;
    padding: 20px 35px;
    font-size: 30px;
    border-radius: 20px;

    &:hover {
      background: black;
      box-shadow: none;
      color: var(--Yellow);
      padding: 20px 45px;
    }
  }
`;

export const Para = styled.p`
  text-align: center;
  padding: 20px 40px;
  font-weight: 700;
  z-index: 20;
  color: black;
  text-shadow: -4px 1px 4px rgba(255, 255, 255, 1);

  @media (min-width: 780px) {
    font-size: 40px;
    padding: 40px 60px;
  }
`;

export const Logo = styled.img`
  margin-top: 50px;
  height: 100px;
  z-index: 20;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (min-width: 780px) {
    height: 200px;
  }
`;

export const Wrapper = styled.div`
  background-image: url(${network});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
`;
