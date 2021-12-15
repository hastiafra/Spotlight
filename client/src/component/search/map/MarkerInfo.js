import React, { useContext, useState, useEffect } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

import { Marker } from "@react-google-maps/api";
import styled from "styled-components";

import { SignedInUserContext } from "../../SignedInUserContext";




const MarkerInfo = ({ detail, setDetail, setLikedFetch, likedFetch }) => {
  
  const [likes, setLikes] = useState(false);

  const [likeNum, setLikeNum] = useState(detail.likes);

  const { user, isAuthenticated } = useAuth0();


  const { setSignedInUser, signedInUser } = useContext(SignedInUserContext);

 
  console.log(signedInUser)

  const toggleLike = () => {

    setLikes(!likes);

   

    if (likes) {

      setLikeNum(detail.likes);

      fetch(`/api/likes/${detail.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ detail, likes: detail.like , email: user.email }),
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
      

    } else {
      setLikeNum(detail.likes + 1);

    
      console.log(likeNum, "inelse");

      fetch(`/api/likes/${detail.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ detail, likes: detail.likes + 1 , email: user.email }),
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
    }

  
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
