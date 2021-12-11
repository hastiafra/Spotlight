import React, { useContext, useEffect, useState } from "react";

//auth0
import { useAuth0 } from "@auth0/auth0-react";

//children
import NavMenu from "../NavMenu/NavMenu";
import PhoneMenu from "../phoneMenu/PhoneMenu";
import spotLight from "../../assets/spotLight.png";

import MapSearch from "./map/MapSearch"

//styling
import { Sidebar, ImgMobile, Input, Wrapper, H1 } from "./style";


import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";


const Search = ({ opened, setOpened }) => {
  const { user, isAuthenticated } = useAuth0();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    
  });


if (!isLoaded) {
 return <h1>loading</h1>
}
else{ return (
    <>
      <NavMenu search={true} />
      <Sidebar
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <ImgMobile src={spotLight} />
      </Sidebar>

      {opened ? (
        <PhoneMenu opened={opened} setOpened={setOpened} search={true} />
      ) : null}
      <Wrapper>
    <H1>What are you looking for?</H1>
        <Input
          type="text"
          placeholder="Search for keywords"
          aria-label="Search Wearable Sync Store"
        />

    <MapSearch isLoaded={isLoaded}/>
      </Wrapper>
    </>
  );}
};

export default Search;
