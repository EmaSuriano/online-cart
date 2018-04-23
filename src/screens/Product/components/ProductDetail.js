import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, Picture, Message, PriceTag } from 'shared/components';

const EMPTY_DESCRIPTION = 'This product does not have any description loaded.';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2em;
  grid-template-areas:
    'image information'
    'image information';

  @media only screen and (max-width: 600px) {
    grid-template-areas:
      'image image'
      'information information';
  }
`;

const ProductInformation = styled.div`
  grid-area: information;
  display: flex;
  flex-direction: column;
  /* grid-area: information;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'name price'
    'description description'
    'description description'; */
`;

const ProductName = Title.extend`
  grid-area: name;
`;

const ProductDescription = Message.extend`
  grid-area: description;
`;

const ProductPrice = styled(PriceTag)`
  margin: auto;
`;

const ProductPicture = Picture.extend`
  grid-area: image;
`;

const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductDetail = ({ description, name, image, price }) => (
  <ProductGrid>
    <ProductPicture size="300" src={image} />
    <ProductInformation>
      <ProductTitle>
        <ProductName fontSize="3" color="secondary">
          {name}
        </ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductTitle>
      <div>
        <Title fontSize="1.5">Product Description</Title>
        <ProductDescription>
          {description || EMPTY_DESCRIPTION}
        </ProductDescription>
      </div>
    </ProductInformation>
  </ProductGrid>
);

ProductDetail.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

ProductDetail.defaultProps = {
  description: '',
};

export default ProductDetail;
