import React from "react";
//Redux
import { useSelector } from "react-redux";
//router
import { useHistory } from "react-router-dom";
//styles
import styled from "styled-components";

const MovieDetail = ({ pathId }) => {
  const history = useHistory();
  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <CardShadow className="shadow" onClick={exitDetailHander}>
      <Detail></Detail>
    </CardShadow>
  );
};

const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;
const Detail = styled.div`
  width: 50vw;
  height: 100vh;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: #181818;
  position: absolute;
  left: 25%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

export default MovieDetail;
