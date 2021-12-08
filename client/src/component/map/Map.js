import React, { useContext, useEffect, useState } from "react";

//map
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';

/* eslint-disable no-undef */
/* global google */


const Map = ({location}) =>{

    const [map, setMap] = useState(null)

    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      
    });

const mapContainerStyle  = {
 width: "400px", 
 height:"400px"
}

if (loadError) {
  return "error loading maps";
}
if (!isLoaded) {
  return <div>Loading</div>;
}
return(
<>
<GoogleMap mapContainerStyle = {mapContainerStyle} zoom={1} center={{lat:0 , lng:0}}/>

</>
)

}


export default Map;