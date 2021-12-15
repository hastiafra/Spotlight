import React, { useContext, useState, useEffect } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

import { Marker } from "@react-google-maps/api";
import styled from "styled-components";

const MarkerInfo = ({ detail, setDetail, setLikedFetch }) => {
  
  const [likes, setLikes] = useState(false);

  const [likeNum, setLikeNum] = useState(detail.likes);

  const { user, isAuthenticated } = useAuth0();

  console.log(detail);

  const toggleLike = () => {
    setLikes(!likes);

    console.log(detail.likes, "likedetail");

    if (likes) {

      setLikeNum(detail.likes);
      setLikedFetch(false)
      

    } else {
      setLikeNum(detail.likes + 1);

      setLikedFetch(true)
    }

    // console.log(likeNum)
    fetch(`/api/likes/${detail.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ detail }),
      //the keys in frontend has to match the backend
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.status === 200) {
          JSON.stringify(data.data);
        } else {
          window.alert("something went wrong!");
        }
      });
  };

  return (
    <Wrapper>
      <Likes>
        <Para>{likeNum}</Para>
        <Icon>
          {isAuthenticated ? (
            <AiTwotoneLike
              onClick={toggleLike}
              color={likes === true ? "yellow" : "gray"}
              size={20}
            />
          ) : (
            <AiTwotoneLike color={"gray"} size={20} />
          )}
        </Icon>
      </Likes>
      <Para>Description: {detail?.description}</Para>
    </Wrapper>
  );
};

export default MarkerInfo;

const Para = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  padding: 5px;
  font-weight: 700;
`;

const Icon = styled.button`
  background-color: none;
  border: none;
  background: none;
  cursor: pointer;
`;

const Likes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
