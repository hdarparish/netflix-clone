import React from "react";
//styles
import styled from "styled-components";

const MovieCard = ({ movie }) => {
  return (
    <Movie>
      <img src={movie} alt="" />
    </Movie>
  );
};

const Movie = styled.div`
  img {
    width: 20vw;
    margin: 0.3rem;
  }
`;

export default MovieCard;
