import React, { useEffect } from "react";
//components
import MovieCard from "../components/MovieCard";
//import GenreSection from "../components/GenreSection";
//styles
import styled from "styled-components";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/movieAction";

const Home = () => {
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
      {/*       {genres.map((section, index) => (
        <GenreSection section={section} key={section.id} />
      ))} */}
      <StyledSection>
        <h3>Action</h3>
        <MovieWrapper>
          {actionMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>Animation</h3>
        <MovieWrapper>
          {animationMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>Documentary</h3>
        <MovieWrapper>
          {horrorMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>Romance</h3>
        <MovieWrapper>
          {romanceMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>TV Movie</h3>
        <MovieWrapper>
          {tvMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </MovieWrapper>
      </StyledSection>
      <StyledSection>
        <h3>Popular TV</h3>
        <MovieWrapper>
          {popularTv.map((movie) => (
            <MovieCard movie={movie} />
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
  h3 {
    color: white;
  }
`;

const MovieWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
`;

export default Home;
