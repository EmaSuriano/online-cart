import styled from 'styled-components';
import React from 'react';

const FooterContainer = styled.div`
  display: grid;
  width: 100%;
  grid: 1fr / 1fr 10rem 10px;
  justify-content: center;
  align-items: center;
  justify-items: self-end;
  color: ${props => props.theme.background};
  background: ${props => props.theme.dark};
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.accent};
`;

const Footer = () => (
  <FooterContainer>
    <p>Made by Emanuel Suriano</p>
    <StyledLink href="https://github.com/EmaSuriano/online-cart">
      Link to the repo
    </StyledLink>
  </FooterContainer>
);

export default Footer;
