import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import spotMarker from "../../assets/spotMarker.png";

import Loading from "../Loading";

//map

import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

import mapStyles from "./mapStyles";

import Geocode from "react-geocode";

/* eslint-disable no-undef */
/* global google */

const Map = ({ confirmLoc, spot, setSpot, location }) => {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const { user, isAuthenticated } = useAuth0();

  const [latLngLocation, setLatLngLocation] = useState({ lat: 0, lng: 0 });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      // const location = JSON.parse(localStorage.getItem("location"));

      let city = location?.city;
      let country = location?.country;

      console.log("map component is called")

      Geocode.fromAddress(city + country).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLatLngLocation({ lat, lng });
          localStorage.setItem("location", JSON.stringify({lat,lng }));
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

      setLatLngLocation({ lat, lng });
    }
  }, [isAuthenticated]);

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const mapContainerStyle = {
    width: "90vw",
    height: "50vh",
  };

  const onMapClick = (event) => {
    setSpot({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  // new google.maps.Marker({
  //   position:location ,
  //   title: "Hello World!",
  // });
  // console.log(pin);
  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <>
        <GoogleMap
          onClick={onMapClick}
          mapContainerStyle={mapContainerStyle}
          zoom={11}
          center={latLngLocation}
          options={options}
        >
          <Marker
            position={{ lat: spot.lat, lng: spot.lng }}
            icon={{
              url: `${spotMarker}`,
              scaledSize: new window.google.maps.Size(25, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(12, 25),
            }}
            animation={google.maps.Animation.BOUNCE}
            draggable={true}
          />
          ;
        </GoogleMap>
      </>
    );
  }
};

export default Map;
