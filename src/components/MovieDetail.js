import React from "react";
//Redux
import { useSelector } from "react-redux";
//router
import { useHistory } from "react-router-dom";
//styles
import styled from "styled-components";
import { motion } from "framer-motion";

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
  const { movieDetail, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHander}>
          <Detail layoutId={pathId}>
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
              alt={`${movieDetail.title} poster`}
            />
            <h3>{movieDetail.title}</h3>
            <MovieOverview>
              <p>{movieDetail.overview}</p>
              <div className="movie-genre">
                <p>
                  Genre:
                  {movieDetail.genres &&
                    movieDetail.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
            </MovieOverview>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;
const Detail = styled(motion.div)`
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
    box-shadow: 0 8px 6px -6px black;
  }
  h3 {
    margin: 0rem 2rem 0rem 2rem;
  }
`;

const MovieOverview = styled(motion.div)`
  margin: 0rem 2rem 0rem 2rem;
  display: flex;
  p {
    text-align: justify;
  }
  .movie-genre {
    width: 25%;
    p {
      padding-left: 1rem;
      font-size: 1rem;
    }
  }
`;

export default MovieDetail;
