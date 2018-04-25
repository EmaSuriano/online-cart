import styled from 'styled-components';

const ProductListContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-bottom: 80px; // end of the result
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  justify-self: stretch;
  align-content: center;
`;

ProductListContainer.displayName = 'ProductListContainer';

export default ProductListContainer;
