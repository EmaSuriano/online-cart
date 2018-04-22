import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme, { ThemePropTypes } from '../constants/theme';

export const Container = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  overflow-y: auto;
  min-width: 600px;
`;

Container.propTypes = {
  theme: ThemePropTypes,
};

Container.displayName = 'Container';

const AppWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
