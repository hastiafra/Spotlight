import React, { useContext, useEffect, useState } from "react";

//auth0
import { useAuth0 } from "@auth0/auth0-react";

import Map from "../../map/Map";


//styling
import {Para, Wrapper, Input, Label, Span,Text, Num, Container, Form, MapLabel, Submit, Search} from "./style"





const InputForm = ({isLoaded}) => {

  const { user, isAuthenticated } = useAuth0();

  const [characters, setCharacters] = useState(70);

  const [userInput, setUserInput] = useState("");

  const [location, setLocation] = 
  
  useState({ city: "", country: "" });

  const [confirmLoc, setConfirmLoc] = useState(false);

  const handleConfirm = () =>{
    localStorage.setItem("location", JSON.stringify(location));
    setConfirmLoc(!confirmLoc);
  }

  const getLocation = (ev, key) => {
    setLocation({ ...location, [key]: ev.target.value });
  };

  // console.log(location)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
  };


  const decrement = (ev) => {
    setCharacters(70 - ev.target.value.length);
  };

  return (
 
      <Form onSubmit={handleSubmit}>
        {isAuthenticated ? (
          <label>
            Your current city is {user["https://example.com/geoip"].city_name}{" "}
            in {user["https://example.com/geoip"].country_name}.
          </label>
        ) : (
         
          <Wrapper>
            <Para>Enter your current location</Para>
            <label> City: </label>
            <Input
              type="text"
              onChange={(ev) => {
                getLocation(ev, "city");
              }}
              value={location.city}
              required
            />
            <label> Country: </label>
            <Input
              type="text"
              onChange={(ev) => {
                getLocation(ev, "country");
              }}
              value={location.country}
              required
              />
              <Search onClick={handleConfirm} type="click">Search</Search>
            </Wrapper>
      
        )}


              <MapLabel>
                Select the location on map
              </MapLabel>
        
        <Map confirmLoc={confirmLoc} isLoaded={isLoaded}/>

        <Label>Enter relevant keywords and separate them with commas ","
          <Span>E.g. restaurant, sushi, all you can eat </Span>
        </Label>
         <Container>
        <Text onChange={decrement} maxLength="70" placeholder="Min 1 and Max 3 keywords" />
       
        <Num>{characters}</Num>
        </Container>


        <Submit type="submit">Submit</Submit>
      </Form>

  );
};

export default InputForm;
