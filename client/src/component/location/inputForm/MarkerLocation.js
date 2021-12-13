import React, { useContext, useState } from "react";

import styled from "styled-components";

import Geocode from "react-geocode";

const MarkerLocation = ({ setMapSpot, mapSpot, setSpot }) => {

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);


const getInput =(ev) =>{

 setMapSpot(ev.target.value);

}

  const getSpot = () => {

    Geocode.fromAddress(mapSpot).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;

        setSpot({ lat, lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };
 

  return (
    <LocationContainer>
      <MapLabel>Select the location on map</MapLabel>
      <MapLabel> or Put an address/postal code/ location name </MapLabel>
      <Input onBlur={getSpot} onChange={getInput} type="text" />
    </LocationContainer>
  );
};

export default MarkerLocation;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const MapLabel = styled.label`
  padding: 10px 0px 5px;
  color: var(--DarkGray);
  text-align: center;
  display: block;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 50px;
`;

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
