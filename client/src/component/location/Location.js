import React, { useContext, useEffect, useState } from "react";

import { SignedInUserContext } from "../SignedInUserContext";

import { useAuth0 } from "@auth0/auth0-react";
import spotLight from "../../assets/spotLight.png";

//styling
import { Sidebar, ImgMobile, Para, Label} from "./style";

//children
import PhoneMenu from "../phoneMenu/PhoneMenu";
import NavMenu from "../NavMenu/NavMenu";
import InputForm from "./inputForm/InputForm";


const Location = () => {
    
  const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);

//navigation
  const [opened, setOpened] = useState(false);
 
  const [location, setLocation] = useState({city:"", country: ""});

  const {city,country} = location

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


  // const getLocation = (ev, key) => {

  //   console.log(ev.target)
  //  setLocation({...location, [key]: ev.target.value})
    
  //  };

   useEffect(() => {
    localStorage.setItem("location", JSON.stringify(location));
  }, [location]);

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  
  // }


  return (
    <>
      <Sidebar onClick={() => {setOpened(!opened)}}>
        <ImgMobile src={spotLight} />
      </Sidebar>

      {opened? <PhoneMenu opened={opened} setOpened={setOpened}  />:null }

      <NavMenu/>


      {isAuthenticated ? (
        <Para>Hello {signedInUser.firstName} !</Para>
      ) : (
        <Para> Hello guest user!</Para>
      )}


      <InputForm/>

      {/* {isAuthenticated ? (
        <Para>
          Your current city is {user["https://example.com/geoip"].city_name} in {user["https://example.com/geoip"].country_name}.
        </Para>
      ) : (
        <form onSubmit={handleSubmit}>
        <Label>Enter your current location</Label>
        <input type="text" onChange={(ev)=>{getLocation(ev, key)}} value={city} required/>
        <input type="text" onChange={getLocation} value={country} required/>
        <button type="submit">Submit</button>
      </form>
      )}
     */}
    </>
  );
};

export default Location;
