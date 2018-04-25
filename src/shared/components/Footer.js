import styled from 'styled-components';
import React from 'react';

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 60px;
  display: grid;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-items: self-end;
  color: ${props => props.theme.background};
  background: ${props => props.theme.dark};
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.accent};
  margin: 0 2em;
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
