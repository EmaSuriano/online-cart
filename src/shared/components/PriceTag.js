import React from 'react';
import styled from 'styled-components';
import { ThemePropTypes } from 'shared/constants/theme';
import PropTypes from 'prop-types';

const Price = styled.b`
  color: ${props => props.theme.secondary};
`;

Price.propTypes = {
  theme: ThemePropTypes,
};

const Currency = styled.p`
  color: ${props => props.theme.secondary};
  margin: 0 0.2em;
`;

Currency.propTypes = {
  theme: ThemePropTypes,
};

const PriceTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.fontSize}em;
`;

const PriceTag = ({ children, currencySymbol, fontSize, numberDecimal }) => (
  <PriceTagContainer fontSize={fontSize}>
    <Currency>{currencySymbol} </Currency>
    <Price>{Number(children).toFixed(numberDecimal)}</Price>
  </PriceTagContainer>
);

PriceTag.propTypes = {
  currencySymbol: PropTypes.string,
  children: PropTypes.number,
  numberDecimal: PropTypes.number,
  fontSize: PropTypes.number,
};

PriceTag.defaultProps = {
  currencySymbol: '$',
  numberDecimal: 2,
  children: 0,
  fontSize: 3,
};

export default PriceTag;
