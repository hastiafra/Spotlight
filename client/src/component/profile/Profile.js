import React, { useContext, useEffect, useState } from "react";

//children
import NavMenu from "../NavMenu/NavMenu";
import PhoneMenu from "../phoneMenu/PhoneMenu";
import spotLight from "../../assets/spotLight.png";
import ProfileMap from "./ProfileMap"

import { Sidebar, ImgMobile, Container, Check,Label  } from "./styleProfile";

const Profile = ({ opened, setOpened }) => {
  return (
    <>
      <NavMenu profile={true} />
      <Sidebar
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <ImgMobile src={spotLight} />
      </Sidebar>

      {opened ? (
        <PhoneMenu opened={opened} setOpened={setOpened} profile={true} />
      ) : null}

      <Container>
        <Check type="checkbox" name="registered"/>

        <Label for="vehicle1">Your history result</Label>

        <Check type="checkbox" name="likes" />

        <Label for="vehicle1">Your liked result</Label>
      </Container> 
      <ProfileMap/>
    </>

   
  );
};

export default Profile;
