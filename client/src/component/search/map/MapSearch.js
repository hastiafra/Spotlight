import React, { useContext, useState } from "react";

import { SignedInUserContext } from "../../SignedInUserContext";

import { useAuth0 } from "@auth0/auth0-react";

//map
import { GoogleMap, Marker } from "@react-google-maps/api";

import mapStyles from "../../map/mapStyles";

import Geocode from "react-geocode";

const MapSearch = () => {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const { user, isAuthenticated } = useAuth0();

  const { signedInUser } = useContext(SignedInUserContext);

  const mapContainerStyle = {
    width: "90vw",
    height: "50vh",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={
          isAuthenticated
            ? {
                lat: user["https://example.com/geoip"].latitude,
                lng: user["https://example.com/geoip"].longitude,
              }
            : { lat: 0, lng: 0 }
        }
        options={options}
      />
    </>
  );
};

export default MapSearch;
