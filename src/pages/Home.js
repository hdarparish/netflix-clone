import React, { useEffect } from "react";
//components
import MovieCard from "../components/MovieCard";
import MovieDetail from "../components/MovieDetail";
//styles
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/movieAction";
//router
import { useLocation } from "react-router-dom";

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
    <Wrapper>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <MovieDetail pathId={pathId} />}
        </AnimatePresence>
        <StyledSection>
          <motion.h3>Action</motion.h3>
          <MovieWrapper>
            {actionMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </MovieWrapper>
        </StyledSection>
        <StyledSection>
          <motion.h3>Animation</motion.h3>
          <MovieWrapper>
            {animationMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </MovieWrapper>
        </StyledSection>
        <StyledSection>
          <motion.h3>Horror</motion.h3>
          <MovieWrapper>
            {horrorMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </MovieWrapper>
        </StyledSection>
        <StyledSection>
          <motion.h3>Romance</motion.h3>
          <MovieWrapper>
            {romanceMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </MovieWrapper>
        </StyledSection>
        <StyledSection>
          <motion.h3>TV Movie</motion.h3>
          <MovieWrapper>
            {tvMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </MovieWrapper>
        </StyledSection>
        <StyledSection>
          <motion.h3>Popular TV</motion.h3>
          <MovieWrapper>
            {popularTv.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </MovieWrapper>
        </StyledSection>
      </AnimateSharedLayout>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  padding-left: 4.5rem;
`;
const StyledSection = styled(motion.div)`
  margin-bottom: 1rem;
`;

const MovieWrapper = styled(motion.div)`
  display: flex;
  overflow: hidden;
  padding: 1rem;
  height: 100%;
  &:hover div {
    &:hover {
      z-index: 1;
    }
  }
  /*   div {
    transition: 0.3s transform;
  }
  &:hover div {
    &:hover {
      transform: scale(1.2);
      z-index: 1;
    }
  } */
`;

export default Home;

/* 
$moveLeft = -($tileWidth * ($growFactor - 1) / 2) -33
$moveRight = $330px * ($1.2 - 1) 
*/
