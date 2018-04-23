import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Message, Spinner } from 'shared/components';
import Modal from 'react-responsive-modal';
import Holen from 'holen';
import ProductDetail from './components/ProductDetail';
import styled from 'styled-components';

const ProductContainer = styled.div`
  min-width: 300px;
`;

const GnomeScreen = ({
  match: {
    params: { id },
  },
  history,
}) => (
  <Modal open onClose={() => history.push('/')} little>
    <ProductContainer>
      <Holen
        url={`https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${id}/detail`}
      >
        {({ data, fetching, error }) =>
          (fetching && <Spinner />) ||
          (error && (
            <Message error>
              Can't get the detail of the selected product
            </Message>
          )) || <ProductDetail {...data} />
        }
      </Holen>
    </ProductContainer>
  </Modal>
);

GnomeScreen.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default GnomeScreen;
