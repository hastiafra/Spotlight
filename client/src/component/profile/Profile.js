import React, { useContext, useEffect, useState } from "react";

//children
import NavMenu from "../NavMenu/NavMenu";
import PhoneMenu from "../phoneMenu/PhoneMenu";
import spotLight from "../../assets/spotLight.png";

import { Sidebar, ImgMobile } from "./styleProfile";

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
    </>
  );
};

export default Profile;
