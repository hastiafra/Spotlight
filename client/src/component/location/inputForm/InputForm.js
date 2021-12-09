import React, { useContext, useEffect, useState } from "react";

import {SignedInUserContext} from "../../SignedInUserContext";
import { AnonymousUserContext } from "../../AnonymousUserContext";

//auth0
import { useAuth0 } from "@auth0/auth0-react";

import Map from "../../map/Map";

import Geocode from "react-geocode";

//styling
import {
  Para,
  Wrapper,
  Input,
  Label,
  Span,
  Text,
  Num,
  Container,
  Form,
  MapLabel,
  Submit,
  Search,
} from "./style";

const InputForm = ({ isLoaded }) => {


  const { user, isAuthenticated } = useAuth0();

  const [characters, setCharacters] = useState(70);

  const [userInput, setUserInput] = useState("");

  const [location, setLocation] = useState({ city: "", country: "" });

  const [confirmLoc, setConfirmLoc] = useState(false);

  const [spot, setSpot]=useState("")

  const {setSignedInUser} = useContext(SignedInUserContext);
  const {setAnonymousUser} = useContext(AnonymousUserContext);

  const handleConfirm = () => {
    localStorage.setItem("location", JSON.stringify(location));
    setConfirmLoc(!confirmLoc);
  };

  const getLocation = (ev, key) => {
    setLocation({ ...location, [key]: ev.target.value });
  };


  const getSpot =(ev)=>{
  
    Geocode.fromAddress(ev.target.value).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;

        setSpot({ lat, lng });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // console.log(location)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
    setUserInput(ev.target.value)
  };

  const decrement = (ev) => {
    setCharacters(70 - ev.target.value.length);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {isAuthenticated ? (
        <label>
          Your current city is {user["https://example.com/geoip"].city_name} in{" "}
          {user["https://example.com/geoip"].country_name}.
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
          <Search onClick={handleConfirm} type="click">
            Search
          </Search>
        </Wrapper>
      )}
<div>
      <MapLabel>Select the location on map</MapLabel>

      <label> or Put an address/postal code/ location name </label>
          <Input
            onChange={getSpot}
            type="text"
         
            required
          />

      <Map confirmLoc={confirmLoc} isLoaded={isLoaded} spot={spot} setSpot={setSpot} />

      <Label>
        Enter relevant keywords and separate them with commas ","
        <Span>E.g. restaurant, sushi, all you can eat </Span>
      </Label>
</div>

      <Container>
        <Text
          onChange={decrement}
          maxLength="70"
          placeholder="Min 1 and Max 3 keywords"
          value={userInput}
        />

        <Num>{characters}</Num>
      </Container>

      <Submit type="submit">Submit</Submit>
    </Form>
  );
};

export default InputForm;
