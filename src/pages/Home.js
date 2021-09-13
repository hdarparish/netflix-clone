import React, { useEffect } from "react";
//components
import MovieCard from "../components/MovieCard";
import MovieDetail from "../components/MovieDetail";
//styles
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { breakpoints } from "../animation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
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
    historyMovies,
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
            breakpoints={breakpoints}
          >
            <motion.div className="movie-wrapper">
              {actionMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie} key={movie.id} />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
        </motion.div>
        <motion.div className="genre-section">
          <motion.h3>Animation</motion.h3>
          <Swiper
            slidesPerView={6}
            slidesPerGroup={5}
            className="mySwiper"
            navigation
            breakpoints={breakpoints}
          >
            <motion.div className="movie-wrapper">
              {animationMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie} key={movie.id} />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
        </motion.div>
        <motion.div className="genre-section">
          <motion.h3>Horror</motion.h3>
          <Swiper
            slidesPerView={6}
            slidesPerGroup={5}
            className="mySwiper"
            navigation
            breakpoints={breakpoints}
          >
            <motion.div className="movie-wrapper">
              {horrorMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie} key={movie.id} />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
        </motion.div>
        <motion.div className="genre-section">
          <motion.h3>Romance</motion.h3>
          <Swiper
            slidesPerView={6}
            slidesPerGroup={5}
            className="mySwiper"
            navigation
            breakpoints={breakpoints}
          >
            <motion.div className="movie-wrapper">
              {romanceMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie} key={movie.id} />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
        </motion.div>
        <motion.div className="genre-section">
          <motion.h3>TV Movie</motion.h3>
          <Swiper
            slidesPerView={6}
            slidesPerGroup={5}
            className="mySwiper"
            navigation
            breakpoints={breakpoints}
          >
            <motion.div className="movie-wrapper">
              {tvMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie} key={movie.id} />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
        </motion.div>
        <motion.div className="genre-section">
          <motion.h3>Comedy</motion.h3>
          <Swiper
            slidesPerView={6}
            slidesPerGroup={5}
            className="mySwiper"
            navigation
            breakpoints={breakpoints}
          >
            <motion.div className="movie-wrapper">
              {historyMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie} key={movie.id} />
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>
        </motion.div>
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Home;

/* 

*/
