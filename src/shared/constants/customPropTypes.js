import PropTypes from 'prop-types';

export const ProductItemListPropType = PropTypes.shape({
  product_id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});

export const ProductDetailPropType = PropTypes.shape({
  product_id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});
