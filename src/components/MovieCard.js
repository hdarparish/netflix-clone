import React from "react";
//styles
import styled from "styled-components";
//router
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const postURL = `https://image.tmdb.org/t/p/w500`;

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    // dispatch(loadDetail(id));
  };
  return (
    <Movie onClick={loadDetailHandler}>
      <Link to={`/movie/${movie.id}`}>
        <img src={postURL + movie.backdrop_path} alt="" />
      </Link>
    </Movie>
  );
};

const Movie = styled.div`
  img {
    width: 17vw;
    margin: 0.3rem;
    border-radius: 5px;
  }
`;

export default MovieCard;
