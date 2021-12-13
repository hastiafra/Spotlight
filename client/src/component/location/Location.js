import React, { useContext, useEffect, useState } from "react";

import { SignedInUserContext } from "../SignedInUserContext";

import { useAuth0 } from "@auth0/auth0-react";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

import spotLight from "../../assets/spotLight.png";

//styling
import { Sidebar, ImgMobile, Para, Label } from "./style";

//children
import PhoneMenu from "../phoneMenu/PhoneMenu";
import NavMenu from "../NavMenu/NavMenu";
import InputForm from "./inputForm/InputForm";
import Loading from "../Loading";

const Location = ({opened, setOpened}) => {
  const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);

 

  // const [location, setLocation] = useState({ city: "", country: "" });



  // const libraries = ["places"];

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setSignedInUser({
        firstName: user?.given_name,
        lastName: user.family_name,
        email: user.email,
        city: user["https://example.com/geoip"].city_name,
        country: user["https://example.com/geoip"].country_name,
      });
    }
  }, [user]);

 
 
    return (
      <>
        <Sidebar
          onClick={() => {
            setOpened(!opened);
          }}
        >
          <ImgMobile src={spotLight} />
        </Sidebar>

        {opened ? <PhoneMenu opened={opened} setOpened={setOpened} /> : null}

        <NavMenu />

        {isAuthenticated ? (
          <Para>Hello {signedInUser.firstName} !</Para>
        ) : (
          <Para> Hello guest user!</Para>
        )}

        <InputForm/>
      </>
    );
  
};

export default Location;
