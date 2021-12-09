import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { useAuth0 } from "@auth0/auth0-react";

//icons
import GiPlainCircle from "react-icons/gi";

//map
import {
  
  GoogleMap,
  Marker,
  useJsApiLoader,
  useLoadScript,
  InfoWindow
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

import Geocode from "react-geocode";

/* eslint-disable no-undef */
/* global google */

const Map = ({ confirmLoc, isLoaded }) => {

  // const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
 
  const { user, isAuthenticated } = useAuth0();

  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const [markers, setMarkers] = useState([]);



 

  useEffect(() => {
    if (!isAuthenticated) {
      const location = JSON.parse(localStorage.getItem("location"));

      let city = location.city;
      let country = location.country;

      Geocode.fromAddress(city + country).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;

          setLocation({ lat, lng });
        },
        (error) => {
          console.error(error);
        }
      );
    }

  }, [confirmLoc]);

  

  useEffect(() => {
    if (isAuthenticated) {
     let lat = user["https://example.com/geoip"].latitude;
     let lng = user["https://example.com/geoip"].longitude;
  
      setLocation({ lat, lng});
    }
  }, [isAuthenticated]);

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
  const mapContainerStyle = {
    width: "90vw",
    height: "40vh",
  };

  return (
    <>
      <GoogleMap
        onClick={(ev) => {
          setMarkers((current) => [
            ...current,
            {
              lat: ev.latLng.lat(),
              lng: ev.latLng.lng(),
              date:new Date(),
            },
          ]);
        }}
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={location}
        options={options}
      >
        {markers.map((marker)=>{
          <Marker key={marker.date.toISOString()} position={{lat:marker.lat, lng:marker.lng}}
         
          
          />
        })}
      </GoogleMap>
    </>
  );
};

export default Map;
