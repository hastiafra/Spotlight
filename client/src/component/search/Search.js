import React, { useContext, useEffect, useState } from "react";

//auth0
import { useAuth0 } from "@auth0/auth0-react";

//children
import NavMenu from "../NavMenu/NavMenu";
import PhoneMenu from "../phoneMenu/PhoneMenu";
import spotLight from "../../assets/spotLight.png";
import Loading from "../Loading";
import MapSearch from "./map/MapSearch";

//styling
import {
  Sidebar,
  ImgMobile,
  Input,
  Wrapper,
  H1,
  Check,
  Label,
  Container,
  ButtonSearch,
} from "./style";

import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

//icon
import { BsSearch } from "react-icons/bs";

const Search = ({ opened, setOpened }) => {
  const { user, isAuthenticated } = useAuth0();

  const [searchInput, setSearchInput] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const [registeredCheck, setRegisteredCheck] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const searchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (ev) => {
    ev.preventDefault();

    if (searchInput.length > 0) {
      fetch(`/api/${searchInput}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.data[0]) {
            setSearchResult(data.data);
          } else {
            window.alert("not found");
          }
        });
    }
  };

  const registeredResult = () => {
    setRegisteredCheck(!registeredCheck);
  };

  let registeredArr = [];
  if (registeredCheck === true) {
    registeredArr = searchResult.filter((data) => {
      return data.registered === true;
    });
  }

  console.log(registeredArr);
  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
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

          <form onSubmit={handleSearch}>
            <Input
              value={searchInput}
              onChange={searchChange}
              type="text"
              placeholder="Search for a keyword"
              required
            />
            <ButtonSearch>
              <BsSearch size={20} />
            </ButtonSearch>
          </form>

          {isAuthenticated ? (
            <Container>
              <Check
                type="checkbox"
                name="registered"
                onChange={registeredResult}
              />

              <Label for="vehicle1">only show the registered user result</Label>

              <Check type="checkbox" name="likes" value={true} />

              <Label for="vehicle1">
                only show the result with highest likes
              </Label>
            </Container>
          ) : null}
          <MapSearch
            isLoaded={isLoaded}
            searchResult={searchResult}
            registeredArr={registeredArr}
            registeredCheck={registeredCheck}
          />
        </Wrapper>
      </>
    );
  }
};

export default Search;
