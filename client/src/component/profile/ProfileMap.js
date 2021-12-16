import React, { useContext, useState, useEffect } from "react";

import Loading from "../Loading";

import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";

import spotMarker from "../../assets/spotMarker.png";

import MarkerInfo from "./MarkerInfo";

//map
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "../map/mapStyles";

const ProfileMap = ({ historySearchResult }) => {
  const { user, isAuthenticated } = useAuth0();

  const [detail, setDetail] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapContainerStyle = {
    width: "90vw",
    height: "50vh",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <Wrapper>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={
            isAuthenticated && {
              lat: user["https://example.com/geoip"].latitude,
              lng: user["https://example.com/geoip"].longitude,
            }
          }
          options={options}
        >
          {historySearchResult?.map((item) => {
            return (
              <Marker
                key={item.id}
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
          })}

          {detail ? (
            <InfoWindow
              position={{
                lat: detail.selectedLoc?.lat + 0.008,
                lng: detail.selectedLoc?.lng,
              }}
              shouldFocus={true}
              onCloseClick={() => setDetail(null)}
            >
              <MarkerInfo
                detail={detail}
              />
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </Wrapper>
    );
  }
};

export default ProfileMap;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
`;
