import React from "react";
//styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animation";
//router
import { Link } from "react-router-dom";
//redux
import { loadDetail } from "../actions/detailAction";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie }) => {
  const postURL = `https://image.tmdb.org/t/p/w500`;
  const stringPathId = movie.id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(movie.id));
  };
  return (
    <MovieSection
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <MovieTile
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <Link to={`/movie/${movie.id}`}>
          <motion.div>
            <motion.img
              layoutId={`image ${stringPathId}`}
              src={postURL + movie.backdrop_path}
              alt={movie.title}
            />
          </motion.div>
        </Link>
      </MovieTile>
    </MovieSection>
  );
};

const MovieSection = styled(motion.div)`
  img {
    width: 17vw;
    margin: 0.3rem;
    border-radius: 0.3rem;
  }
`;

const MovieTile = styled(motion.div)``;

export default MovieCard;
