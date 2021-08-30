import React from "react";
//styles
import styled from "styled-components";

const GenreSection = ({ section }) => {
  return (
    <StyledSection>
      <h3>{section.title}</h3>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  h3 {
    color: white;
  }
`;

export default GenreSection;
