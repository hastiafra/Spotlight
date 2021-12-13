import React, { useContext, useState } from "react";

import styled from "styled-components";

const LocationForm = ({ setLocation, setConfirmLoc, confirmLoc, location }) => {

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleConfirm = (ev) => {

    ev.preventDefault();

    setLocation({ city:city, country:country });

    // localStorage.setItem("location", JSON.stringify(location));

    setConfirmLoc(!confirmLoc);
  };

  //   console.log({city, country})

  const getCity = (ev) => {
    // setCityCountry({ ...cityCountry, [key]: ev.target.value });
    setCity(ev.target.value);
  };

  const getCountry = (ev) => {
    setCountry(ev.target.value);
  };

  return (
    <Form onSubmit={handleConfirm}>
      <Wrapper>
        <Para>Enter your current location</Para>
        <label> City: </label>
        <Input type="text" onChange={getCity} value={city} required />
        <label> Country: </label>
        <Input type="text" onChange={getCountry} value={country} required />
        <Search type="submit">Search</Search>
      </Wrapper>
    </Form>
  );
};

export default LocationForm;

export const Input = styled.input`
  display: inline-block;
  margin: 20px;
  border: none;
  border-bottom: solid;
  background-color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;

  padding: 10px;

  &:focus {
    border: none;
    background-color: var(--Yellow);
  }
  &:active {
    border: none;
    background-color: white;
  }

  @media (min-width: 780px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
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

const Para = styled.p`
  padding: 10px 50px;
  font-weight: 700;

  @media (min-width: 780px) {
    display: inline-block;
  }
`;

const Search = styled.button`
  background-color: gray;
  cursor: pointer;
  padding: 10px 30px;
  margin: 15px;
  border-radius: 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  color: var(--Yellow);
  font-family: "Righteous", cursive;

  transition: 500ms ease;

  &:hover {
    background: black;
    box-shadow: none;
    color: var(--Yellow);
  }
`;
