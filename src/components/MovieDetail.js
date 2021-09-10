import React from "react";
//Redux
import { useSelector } from "react-redux";
//router
import { useHistory } from "react-router-dom";
//styles
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
        <motion.div className="card-shadow shadow" onClick={exitDetailHander}>
          <motion.div className="movie-overview" layoutId={pathId}>
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
              alt={`${movieDetail.title} poster`}
            />
            <h3>{movieDetail.title}</h3>
            <motion.div className="movie-detail">
              <p>{movieDetail.overview}</p>
              <div className="movie-genre">
                <p>
                  Genre:
                  {movieDetail.genres &&
                    movieDetail.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MovieDetail;
