import React from "react";
//styles
import { motion } from "framer-motion";
import { popup } from "../animation";
//router
import { Link } from "react-router-dom";
//redux
import { loadDetail } from "../actions/detailAction";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie, id }) => {
  const postURL = `https://image.tmdb.org/t/p/w500`;
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(movie.id));
  };
  return (
    <motion.div
      className="movie-section"
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={id}
      onClick={loadDetailHandler}
    >
      <motion.div className="movie-tile">
        <Link to={`/movie/${id}`}>
          <motion.img
            layoutId={`image ${id}`}
            src={postURL + movie.backdrop_path}
            alt={movie.title}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MovieCard;
