import React from "react";
//components
import MovieCard from "./MovieCard";
//styles
import styled from "styled-components";

const GenreSection = ({ section }) => {
  return (
    <StyledSection>
      <h3>{section}</h3>
      <MovieWrapper>
        {/*         {section.posters.map((movie) => {
          <MovieCard movie={movie} />;
        })} */}
      </MovieWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  h3 {
    color: white;
  }
`;

const MovieWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
`;

export default GenreSection;
