import React, { useContext, useState,useEffect } from "react";

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

  const [location, setLocation] = useState({ lat: 0, lng: 0 });


  useEffect(() => {
    if (!isAuthenticated) {
      const location = JSON.parse(localStorage.getItem("location"));

      let city = location?.city;
      let country = location?.country;

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
  }, [location]);




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
            : location
        }
        options={options}
      />
    </>
  );
};

export default MapSearch;
