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
  //Data
  const { movieDetail } = useSelector((state) => state.detail);
  console.log(movieDetail);
  return (
    <CardShadow className="shadow" onClick={exitDetailHander}>
      <Detail>
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
        />
        <h3>{movieDetail.title}</h3>
        <div>
          <p>{movieDetail.overview}</p>
          {movieDetail.genres &&
            movieDetail.genres.map((genre) => <p>{genre.name}</p>)}
        </div>
      </Detail>
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
  background-color: #181818;
  position: absolute;
  left: 25%;
  color: black;
  margin-top: 3vh;
  z-index: 10;
  img {
    width: 100%;
    height: 50vh;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
  }
`;

export default MovieDetail;
