import React, { useContext, useState, useEffect } from "react";

import { SignedInUserContext } from "../../SignedInUserContext";

import { useAuth0 } from "@auth0/auth0-react";

//map
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

import mapStyles from "../../map/mapStyles";

// import Geocode from "react-geocode";

import spotMarker from "../../../assets/spotMarker.png";

//children
import MarkerInfo from "./MarkerInfo";

const MapSearch = ({ searchResult, registeredArr, registeredCheck }) => {
  // Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const { user, isAuthenticated } = useAuth0();

  const { signedInUser } = useContext(SignedInUserContext);

  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      const location = JSON.parse(localStorage.getItem("location"));

      setLocation(location);
    }
  }, []);

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
        zoom={10}
        center={
          isAuthenticated
            ? {
                lat: user["https://example.com/geoip"].latitude,
                lng: user["https://example.com/geoip"].longitude,
              }
            : location
        }
        options={options}
      >

{registeredCheck? registeredArr.map((item) => {
            return (
              <Marker
                key={item._id}
                position={{
                  lat: item["selectedLoc"].lat,
                  lng: item["selectedLoc"].lng,
                }}
                icon={{
                  url: `${spotMarker}`,
                  scaledSize: new window.google.maps.Size(25, 30),
                  origin: new window.google.maps.Point(0, 0),
                }}
                onClick={() => {
                  setDetail(item);
                }}
              />
            );
          }): searchResult ? (
            searchResult.map((item) => {
              return (
                <Marker
                  key={item._id}
                  position={{
                    lat: item["selectedLoc"].lat,
                    lng: item["selectedLoc"].lng,
                  }}
                  icon={{
                    url: `${spotMarker}`,
                    scaledSize: new window.google.maps.Size(25, 30),
                    origin: new window.google.maps.Point(0, 0),
                  }}
                  onClick={() => {
                    setDetail(item);
                  }}
                />
              );
            })
          ) : (
            <div>
              <h1>no result found</h1>
            </div>
          )}

        {detail ? (
          <InfoWindow
            position={{
              lat: detail.selectedLoc?.lat + 0.002,
              lng: detail.selectedLoc?.lng,
            }}
            shouldFocus={true}
            onCloseClick={() => setDetail(null)}
          >
            <MarkerInfo
              detail={detail}
              searchResult={searchResult}
              registeredArr={registeredArr}
              registeredCheck={registeredCheck}
            />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </>
  );
};

export default MapSearch;
