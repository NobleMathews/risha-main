import React from "react";
import styled from "styled-components";

const StyledLocation = styled.p`
  font-weight:bold;
  color: var(--primary);
`

export const Location = ({location}) => (
  <StyledLocation>
    {location}
  </StyledLocation>
)
