import React, { useState } from "react";
//components
import GenreSection from "../components/GenreSection";
//data
import { MovieState } from "../MovieState";
//styles
import styled from "styled-components";

const Home = () => {
  const [movieSection, setMovieSection] = useState(MovieState);
  return (
    <Wrapper>
      {movieSection.map((section, index) => (
        <GenreSection section={section} key={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 4.5rem;
`;

export default Home;
