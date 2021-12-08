import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";


import { useAuth0 } from "@auth0/auth0-react";

//map
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

import Geocode from "react-geocode";

/* eslint-disable no-undef */
/* global google */

const Map = ({ confirmLoc, isLoaded }) => {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  // });

  useEffect(() => {
    const location = JSON.parse(localStorage.getItem("location"));
    // console.log(location);
    // let address = "Montreal";
    // if (location.city && !== "") {
    //   address = location.city;
    // }
    let city = location.city;
    let country = location.country;
    
    Geocode.fromAddress(city + country).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log({ lat, lng });
        setLocation({ lat, lng });
      },
      (error) => {
        console.log("hello")
        console.error(error);
      }
    );
  }, [confirmLoc]);

  const mapContainerStyle = {
    width: "90vw",
    height: "40vh",
  };

  
  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={location}
      />
    </>
  );
};

export default Map;
