import styled from "styled-components";




export const MapWrapper = styled.div`

background-color: rgb(74, 74, 89);
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius:60px 60px 60px 60px;
margin:20px 0px;
padding-button:20px;

`


export const Search = styled.button`

background-color: gray;
cursor: pointer;
padding: 10px 30px;
margin:15px;
border-radius: 10px;
border: none;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
color:var(--Yellow);
font-family: "Righteous", cursive;

transition: 500ms ease;

&:hover {
  background: black;
  box-shadow: none;
  color: var(--Yellow);
}

`







export const Submit = styled.button`

background-color: var(--DarkGray);
color: var(--ghostWhite);
border: none;
padding: 15px 50px;
border-radius: 15px;
font-size: 18px;
font-family: "Righteous", cursive;
margin: 30px 0px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
z-index: 20;
cursor: pointer;

transition: 500ms ease;

&:hover {
  background: black;
  box-shadow: none;
  color: var(--Yellow);
  padding: 15px 65px;
}


`


export const Label = styled.label`
text-align: center;
display: block;
font-weight: 700;
padding: 10px 20px;
`;

export const MapLabel = styled(Label)`
padding: 10px 0px 5px;
color: var(--ghostWhite);
`
export const Span = styled.span`
  text-align: center;
  display: block;
  padding: 10px;
  font-weight: 400;
`;

export const Text = styled.textarea`
  text-align: center;
  display: block;
  padding: 15px 30px;
  width: 200px;
  height: 25px;
  border: none;
  resize: none;
  outline: none;
  background-color: var(--ghostWhite);
  border-radius: 20px 0px 0px 20px;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 700;
  position: relative;

  @media (min-width: 780px) {
    width: 300px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Num = styled.p`
  font-size: 12px;
  color: gray;
  background-color: var(--ghostWhite);
  padding: 30px 5px 10px 0px;
  border-radius: 0px 20px 20px 0px;

`;

export const Para = styled.p`
  padding: 10px 50px;
  font-weight: 700;

  @media (min-width: 780px) {
    display: inline-block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  flex-direction: column;

  @media (min-width: 780px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  display: inline-block;
  margin: 20px;
  border: none;
  border-bottom: solid;
  background-color:white;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;

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
