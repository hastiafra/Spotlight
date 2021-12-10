import React, { useContext, useEffect, useState } from "react";

//auth0
import { useAuth0 } from "@auth0/auth0-react";

//children
import NavMenu from "../NavMenu/NavMenu";
import PhoneMenu from "../phoneMenu/PhoneMenu";
import spotLight from "../../assets/spotLight.png";

//styling
import { Sidebar, ImgMobile, Input, Wrapper, H1 } from "./style";

const Search = ({ opened, setOpened }) => {
  const { user, isAuthenticated } = useAuth0();

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
        <Input
          type="text"
          placeholder="Search for keywords"
          aria-label="Search Wearable Sync Store"
        />

        
      </Wrapper>
    </>
  );
};

export default Search;
