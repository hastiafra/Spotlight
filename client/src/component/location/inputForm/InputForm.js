import React, { useContext, useState } from "react";

import { SignedInUserContext } from "../../SignedInUserContext";
import { AnonymousUserContext } from "../../AnonymousUserContext";

//auth0
import { useAuth0 } from "@auth0/auth0-react";

//map
import Map from "../../map/Map";
import Geocode from "react-geocode";

//styling
import {
  Para,
  MapWrapper,
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

import { useHistory } from "react-router-dom";

const InputForm = ({ isLoaded }) => {
  let history = useHistory();

  const { user, isAuthenticated } = useAuth0();

  const [characters, setCharacters] = useState(70);

  const [userInput, setUserInput] = useState();

  const [location, setLocation] = useState({ city: "", country: "" });

  const [confirmLoc, setConfirmLoc] = useState(false);

  const [spot, setSpot] = useState("");

  const { setSignedInUser, signedInUser } = useContext(SignedInUserContext);

  const { setAnonymousUser, anonymousUser } = useContext(AnonymousUserContext);

  const handleConfirm = (ev) => {
    ev.preventDefault();

    localStorage.setItem("location", JSON.stringify(location));

    setConfirmLoc(!confirmLoc);
  };

  const getLocation = (ev, key) => {
    setLocation({ ...location, [key]: ev.target.value });
  };

  const getSpot = (ev) => {
    Geocode.fromAddress(ev.target.value).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;

        setSpot({ lat, lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

 

  const handleSubmit = (ev) => {
    let keywords = userInput?.split(",");
    ev.preventDefault();

    let userObj = {};

    if (!isAuthenticated) {
      userObj = {
        city: location.city,
        country: location.country,
        selectedLoc: { lat: spot.lat, lng: spot.lng },
        keywordArr: keywords,
        registered:false,
        likes:0,
      };
      setAnonymousUser(userObj);
    }

    if (isAuthenticated) {
      userObj = {
        firstName: user?.given_name,
        lastName: user.family_name,
        email: user.email,
        city: user["https://example.com/geoip"].city_name,
        country: user["https://example.com/geoip"].country_name,
        selectedLoc: { lat: spot.lat, lng: spot.lng },
        keywordArr: keywords,
        registered:true,
        likes:0,
      };
      setSignedInUser(userObj);
    }

    if (
      keywords === undefined ||
      keywords?.length === 0 ||
      keywords?.length > 3 || userObj.city.length === 0 || userObj.country.length===0
    ) {
      window.alert(
        "you need to put at least 1 keywords and max 3, make sure to separate keywords by comma "
      );
    } else {
      fetch("/api/newData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(userObj),
      })
        .then((res) => res.json())

        .then((data) => {
          if (data.status !== 200) {
            return window.alert("please fill the missing info");
          } else {
            if (!isAuthenticated) {
              window.localStorage.setItem(
                "userInput",
                JSON.stringify(anonymousUser)
              );
            }

            history.push("/search");
          }
        });
    }
  };

  const decrement = (ev) => {
    setCharacters(70 - ev.target.value.length);
    setUserInput(ev.target.value);
  };

  return (
    <Wrapper>
      {isAuthenticated ? (
        <Para>
          Your current city is {user["https://example.com/geoip"].city_name} in{" "}
          {user["https://example.com/geoip"].country_name}.
        </Para>
      ) : (
        <Form onSubmit={handleConfirm}>
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
            <Search type="submit">Search</Search>
          </Wrapper>
        </Form>
      )}
      <Form onSubmit={handleSubmit}>
        <MapWrapper>
          <MapLabel>Select the location on map</MapLabel>

          <MapLabel> or Put an address/postal code/ location name </MapLabel>
          <Input onChange={getSpot} type="text" required />

          <Map
            confirmLoc={confirmLoc}
            isLoaded={isLoaded}
            spot={spot}
            setSpot={setSpot}
          />
        </MapWrapper>
        <Label>
          Enter relevant keywords and separate them with commas ","
          <Span>E.g. restaurant, sushi, all you can eat </Span>
        </Label>

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
    </Wrapper>
  );
};

export default InputForm;
