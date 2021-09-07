import React, { useEffect } from "react";
//components
import MovieCard from "../components/MovieCard";
import MovieDetail from "../components/MovieDetail";
//styles
import styled from "styled-components";
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
      {pathId && <MovieDetail pathId={pathId} />}
      <StyledSection>
        <h3>Action</h3>
        <MovieWrapper>
          {actionMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>Animation</h3>
        <MovieWrapper>
          {animationMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>Documentary</h3>
        <MovieWrapper>
          {horrorMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>Romance</h3>
        <MovieWrapper>
          {romanceMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>TV Movie</h3>
        <MovieWrapper>
          {tvMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>Popular TV</h3>
        <MovieWrapper>
          {popularTv.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </MovieWrapper>
      </StyledSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 4.5rem;
`;
const StyledSection = styled.div`
  margin-bottom: 1rem;
`;

const MovieWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
`;

export default Home;
