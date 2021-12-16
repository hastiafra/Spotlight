import { Marker } from "@react-google-maps/api";
import React, { useContext, useState, useEffect } from "react";

import styled from "styled-components";

const MarkerInfo = ({ detail }) => {
  console.log(detail);

  //city: "Montreal"
  // country: "Canada"
  // email: "hasti.n.afra@gmail.com"
  // firstName: "Hasti"
  // id: "61b5954b8b4c29a8b6358d10"
  // keywordArr: (3) ['gym', 'fitness', 'econofitness']
  // lastName: "Afra"
  // liked: ['61b597f68b4c29a8b6358d15']
  // likes: 103
  // registered: true
  // selectedLoc: {lat: 45.47572419999999, lng: -73.66552530000001}
  // _id: "61b5954b8b4c29a8b6358d10"

  return (
    <Wrapper>
      <Para>{detail.likes} like(s)</Para>
      <Para>{detail.keywordArr.toString()}</Para>
      <Para>lat: {detail.selectedLoc.lat}, </Para>
      <Para>lng:{detail.selectedLoc.lng}</Para>
    </Wrapper>
  );
};

export default MarkerInfo;

const Para = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 12px;
  padding: 5px;
  font-weight: 500;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
