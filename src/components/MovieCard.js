import React from "react";
//styles
import styled from "styled-components";

const MovieCard = ({ movie }) => {
  const postURL = `https://image.tmdb.org/t/p/w500`;
  return (
    <Movie>
      <img src={postURL + movie.backdrop_path} alt="" />
    </Movie>
  );
};

const Movie = styled.div`
  img {
    width: 17vw;
    margin: 0.3rem;
  }
`;

export default MovieCard;
