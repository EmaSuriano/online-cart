import React from 'react';
import PropTypes from 'prop-types';
import { ProductItemListPropType } from 'shared/constants/customPropTypes';
import ProductCard from './ProductCard';
import ProductListContainer from './ProductListContainer';

const ProductList = ({ products }) => (
  <ProductListContainer>
    {products.map(product => <ProductCard key={product.id} {...product} />)}
  </ProductListContainer>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductItemListPropType),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
