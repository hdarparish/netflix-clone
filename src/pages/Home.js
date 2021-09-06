import React, { useEffect } from "react";
//components
import GenreSection from "../components/GenreSection";
//styles
import styled from "styled-components";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/genreAction";

const Home = () => {
  //fetch movies/genres
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  //get the data back
  const { genres } = useSelector((state) => state.genres);
  return (
    <Wrapper>
      {genres.length > 0 &&
        genres.map((section) => (
          <GenreSection section={section.name} key={section.id} />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 4.5rem;
`;

export default Home;
