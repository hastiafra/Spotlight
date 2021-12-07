import React, { useContext, useEffect, useState } from "react";

import { SignedInUserContext } from "../SignedInUserContext";

import { useAuth0 } from "@auth0/auth0-react";
import spotLight from "../../assets/spotLight.png";

//styling
import { Sidebar, ImgMobile} from "./style";

//children
import PhoneMenu from "../phoneMenu/PhoneMenu";
import NavMenu from "../NavMenu/NavMenu";


const Location = () => {
    
  const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);


  const [opened, setOpened] = useState(false);

  const { user, isAuthenticated } = useAuth0();

  //   if (user) {
  //     console.log(user["https://example.com/geoip"].city_name);
  //     console.log(user);
  //     console.log(Object.keys(user));
  //   }

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
      <Sidebar onClick={() => {setOpened(!opened)}}>
        <ImgMobile src={spotLight} />
      </Sidebar>

      {opened? <PhoneMenu opened={opened} setOpened={setOpened}  />:null }

      <NavMenu/>
      




      {isAuthenticated ? (
        <p>Hello {signedInUser.firstName} !</p>
      ) : (
        <p> Hello guest user!</p>
      )}

      {isAuthenticated ? (
        <p>
          Your current city is {user["https://example.com/geoip"].city_name} in {user["https://example.com/geoip"].country_name}.
        </p>
      ) : (
        <p> Please select your current city and country: </p>
      )}
    
    </>
  );
};

export default Location;
