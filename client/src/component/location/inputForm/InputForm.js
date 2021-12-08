import React, { useContext, useEffect, useState } from "react";

//auth0
import { useAuth0 } from "@auth0/auth0-react";

import Map from "../../map/Map"





const InputForm = () => {
  const { user, isAuthenticated } = useAuth0();

  const [location, setLocation] = useState({ city: "", country: "" });

  const getLocation = (ev, key) => {
    console.log(ev.target);
    setLocation({ ...location, [key]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    localStorage.setItem("location", JSON.stringify(location));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {isAuthenticated ? (
          <label>
            Your current city is {user["https://example.com/geoip"].city_name}{" "}
            in {user["https://example.com/geoip"].country_name}.
          </label>
        ) : (
          <>
            <p>Enter your current location</p>
            <label>city:</label>
            <input
              type="text"
              onChange={(ev) => {
                getLocation(ev, "city");
              }}
              value={location.city}
              required
            />
            <label>country:</label>
            <input
              type="text"
              onChange={(ev) => {
                getLocation(ev, "country");
              }}
              value={location.country}
              required
            />
          </>
        )}

        <label>Enter relevant keywords and separate them with commas (,)
          <span>E.g. restaurant, sushi, all you can eat </span>
        </label>
        <textarea placeholder="min 1 key word, max 3 keywords" />
        
        <label>
          select the location on map
        </label>

        
        <Map/>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default InputForm;
