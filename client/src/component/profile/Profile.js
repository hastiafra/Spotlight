import React, { useContext, useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

//children
import NavMenu from "../NavMenu/NavMenu";
import PhoneMenu from "../phoneMenu/PhoneMenu";
import spotLight from "../../assets/spotLight.png";
import ProfileMap from "./ProfileMap";

import { Sidebar, ImgMobile, Container, Check, Label } from "./styleProfile";

const Profile = ({ opened, setOpened }) => {
  const [historySearch, setHistorySearch] = useState(false);

  const [historySearchResult, setHistorySearchResult] = useState([]);

  const { user, isAuthenticated } = useAuth0();

  const getHistoryResult = () => {
    setHistorySearch(!historySearch);
  };

  useEffect(() => {
    if (historySearch === true) {
      fetch(`/api/user/${user.email}`)
        .then((res) => res.json())

        .then((data) => {
          console.log(data);

          if (data) {
            setHistorySearchResult(data.data);
          } else {
            window.alert("not found");
          }
        });
    }

    else{
      setHistorySearchResult([])
    }
  }, [historySearch]);

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
        <Check
          type="checkbox"
          name="registered"
          onChange={() => getHistoryResult()}
        />

        <Label for="vehicle1">Your history result</Label>

        <Check type="checkbox" name="likes" />

        <Label for="vehicle1">Your liked result</Label>
      </Container>
      <ProfileMap historySearchResult={historySearchResult} />
    </>
  );
};

export default Profile;
