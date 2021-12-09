import React, { useContext, useEffect, useState, useCallback } from "react";

import Geocode from "react-geocode";

import usePlacesAutocomplete, { getLatLng } from "use-places-autocomplete";

// import {
//     GoogleMap,
//     useJsApiLoader,
//     useLoadScript,
//   } from "@react-google-maps/api";



import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const SearchMap = ({ location, setPin }) => {


    // const { } = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //     libraries
    //   });


  const libraries = ["places"];
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestion,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => location.lat, lng: () => location.lng },
      radius: 200 * 1000,
    },
  });

  return (
    <Combobox
      onSelect={(address) => {
        console.log(address);
      }}
    >
      <ComboboxInput
        value={value}
        onchange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="enter an address"
      />
      <ComboboxPopover>
        {status === "ok" &&
          data.map((id, description) => {
            <ComboboxOption key={id} value={description} />;
          })}
      </ComboboxPopover>
    </Combobox>
  );
};

export default SearchMap;
