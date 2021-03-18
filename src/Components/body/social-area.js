import React from "react";
import styled from "styled-components";

const StyledSocialArea = styled.div`
  padding: 2rem;
  font-size: 35px;
  margin: 0 auto;
`;

const StyledMedia = styled.a`
  margin: 0 .5rem;
  &:active,
  &:link,
  &:visited {
    color: grey;
    text-decoration: none;
    outline: none;
  }
  &:hover {
    color: var(--primary);
    cursor: pointer;
  }
`;

export const SocialArea = ({ socialLinks }) => (
  <StyledSocialArea>
    {socialLinks.map(({ icon, link }, index) => (
      <StyledMedia
        rel="noreferrer"
        role="link"
        target="_blank"
        key={index}
        className={`icon fa ${icon}`}
        href={link}
      />
    ))}
  </StyledSocialArea>
);
