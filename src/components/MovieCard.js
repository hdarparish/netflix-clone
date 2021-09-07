import React from "react";
//styles
import styled from "styled-components";
//router
import { Link } from "react-router-dom";
//redux
import { loadDetail } from "../actions/detailAction";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie }) => {
  const postURL = `https://image.tmdb.org/t/p/w500`;

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(movie.id));
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
    border-radius: 0.3rem;
  }
`;

export default MovieCard;
