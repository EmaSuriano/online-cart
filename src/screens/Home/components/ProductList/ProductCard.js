/* eslint-disable camelcase */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductItemListPropType } from 'shared/constants/customPropTypes';
import { Picture, Title, PriceTag } from '../../../../shared/components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'picture picture'
    'name price';
  justify-items: center;
  align-items: center;

  grid-gap: 10px;
  background: white;
  border-radius: 2px;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px ${props => props.theme.secondary}40,
    0 1px 2px ${props => props.theme.secondary}80;
  padding: 0 20px;
  &:hover {
    box-shadow: 0 14px 28px ${props => props.theme.secondary}88,
      0 10px 10px ${props => props.theme.secondary}60;
  }
`;

CardGrid.displayName = 'CardGrid';

export const ProductPicture = Picture.extend`
  grid-area: picture;
`;

ProductPicture.displayName = 'ProductPicture';

export const ProductName = Title.extend`
  font-size: 1.5em;
  grid-area: name;
`;

ProductName.displayName = 'ProductName';

export const ProductPrice = styled(PriceTag)`
  grid-area: price;
`;

ProductPrice.displayName = 'ProductPrice';

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

StyledLink.displayName = 'StyledLink';

// const MAX_PROFESSIONS = 2;

const ProductCard = ({ product_id, name, price, image }) => (
  <StyledLink to={`/product/${product_id}`}>
    <CardGrid>
      <ProductPicture size="200" src={image} />
      <ProductName>{name}</ProductName>
      <ProductPrice fontSize={1.5}>{price}</ProductPrice>
    </CardGrid>
  </StyledLink>
);

ProductCard.propTypes = ProductItemListPropType;

export default ProductCard;
