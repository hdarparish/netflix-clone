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
  const timeConvert = (totalMinutes) => {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  };
  //Data
  const { movieDetail, isLoading } = useSelector((state) => state.detail);
  const movieYear = new Date(movieDetail.release_date).getFullYear();
  const movieTime = timeConvert(movieDetail.runtime);
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
            <div className="movie-year-time">
              <h4>{movieYear}</h4>
              <h4>{movieTime}</h4>
            </div>

            <motion.div className="movie-detail">
              <p>{movieDetail.overview}</p>
              <div className="movie-genre">
                <p>
                  <span>Genre:</span>

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
