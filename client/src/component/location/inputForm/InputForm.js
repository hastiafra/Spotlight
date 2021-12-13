import React, { useContext, useState } from "react";

import { SignedInUserContext } from "../../SignedInUserContext";
import { AnonymousUserContext } from "../../AnonymousUserContext";

//auth0
import { useAuth0 } from "@auth0/auth0-react";

//map
import Map from "../../map/Map";

import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

//styling
import {
  Para,
  LocationWrapper,
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
  Div,
  Describe,
  DescribeHolder,
} from "./style";

import { useHistory } from "react-router-dom";

//children
import LocationForm from "./LocationForm";

import MarkerLocation from "./MarkerLocation";

const InputForm = () => {
  let history = useHistory();

  const { user, isAuthenticated } = useAuth0();

  const [characters, setCharacters] = useState(70);

  const [userInput, setUserInput] = useState();

  const [keyDescribe, setKeyDescribe] = useState("");

  const [location, setLocation] = useState({city: "", country: ""});

  const [confirmLoc, setConfirmLoc] = useState(false);

  const [mapSpot, setMapSpot] = useState(null);

  const [spot, setSpot] = useState("");

  // console.log(location)

  const { setSignedInUser, signedInUser } = useContext(SignedInUserContext);

  const { setAnonymousUser, anonymousUser } = useContext(AnonymousUserContext);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

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
        registered: false,
        likes: 0,
        description: keyDescribe,
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
        registered: true,
        likes: 0,
        description: keyDescribe,
      };
      setSignedInUser(userObj);
    }

    if (
      keywords === undefined ||
      keywords?.length === 0 ||
      keywords?.length > 3 ||
      userObj.city.length === 0 ||
      userObj.country.length === 0
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

  const describe = (ev) => {
    setKeyDescribe(ev.target.value);
  };

  return (
    <Wrapper>
      <LocationWrapper>
        {isAuthenticated ? (
          <Para>
            Your current city is {user["https://example.com/geoip"].city_name}
            in {user["https://example.com/geoip"].country_name}.
          </Para>
        ) : (
          <LocationForm
            setLocation={setLocation}
            setConfirmLoc={setConfirmLoc}
            location={location}
            confirmLoc={confirmLoc}
          />
        )}

        <MarkerLocation
          setMapSpot={setMapSpot}
          mapSpot={mapSpot}
          setSpot={setSpot}
          isLoaded={isLoaded}
        />
      </LocationWrapper>
      <Form onSubmit={handleSubmit}>
        <Map
          confirmLoc={confirmLoc}
          isLoaded={isLoaded}
          spot={spot}
          setSpot={setSpot}
          location={location}
        />

        <Div>
          <div>
            <Label>
              Enter relevant keywords with no space and separate them with
              commas ","
              <Span>E.g. restaurant,sushi,all you can eat </Span>
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
          </div>
          <DescribeHolder>
            <Label>Enter relevant description to the selected spot</Label>

            <Describe
              onChange={describe}
              placeholder="Optional"
              value={keyDescribe}
            />
          </DescribeHolder>
        </Div>

        <Submit type="submit">Submit</Submit>
      </Form>
    </Wrapper>
  );
};

export default InputForm;
