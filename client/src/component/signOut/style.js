import styled from "styled-components";



export const LogOutButton = styled.button`
  padding: 45px;
  color: var(--ghostWhite);
  background:none;
  border: none;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    border-bottom: dotted 3px var(--Yellow);
    padding-bottom: 10px;
}


@media (min-width: 780px) {

  &:hover {
    transition: 300ms ease;
    transform: none;
    border-bottom:none;
    color: var(--Yellow);
    padding-bottom: 40px;
}



}




`