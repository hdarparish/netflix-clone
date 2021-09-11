import React, { useEffect } from "react";
//components
import MovieCard from "../components/MovieCard";
import MovieDetail from "../components/MovieDetail";
//styles
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/movieAction";
//router
import { useLocation } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Navigation]);

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //fetch movies
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  //get the data back
  const {
    actionMovies,
    animationMovies,
    horrorMovies,
    romanceMovies,
    tvMovies,
    popularTv,
  } = useSelector((state) => state.movies);

  return (
    <motion.div className="wrapper">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <MovieDetail pathId={pathId} />}
        </AnimatePresence>
        <motion.div className="genre-section">
          <motion.h3>Action</motion.h3>
          <Swiper
            slidesPerView={6}
            slidesPerGroup={5}
            className="mySwiper"
            navigation
          >
            <motion.div className="movie-wrapper">
              {actionMovies.map((movie) => (
                <SwiperSlide>
                  <MovieCard movie={movie} key={movie.id} />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
        </motion.div>
        {/* <motion.div className="genre-section">
          <motion.h3>Animation</motion.h3>
          <motion.div className="movie-wrapper">
            {animationMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="genre-section">
          <motion.h3>Horror</motion.h3>
          <motion.div className="movie-wrapper">
            {horrorMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="genre-section">
          <motion.h3>Romance</motion.h3>
          <motion.div className="movie-wrapper">
            {romanceMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="genre-section">
          <motion.h3>TV Movie</motion.h3>
          <motion.div className="movie-wrapper">
            {tvMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="genre-section">
          <motion.h3>Popular TV</motion.h3>
          <motion.div className="movie-wrapper">
            {popularTv.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </motion.div>
        </motion.div> */}
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Home;

/* 
$moveLeft = -($tileWidth * ($growFactor - 1) / 2) -33
$moveRight = $330px * ($1.2 - 1) 
*/
