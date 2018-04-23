import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Message, Spinner } from 'shared/components';
import Modal from 'react-responsive-modal';
import Holen from 'holen';
import styled from 'styled-components';
import ProductDetail from './components/ProductDetail';

const FETCH_ERROR_MESSAGE = "Can't get the detail of the selected product";

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
          (error && <Message error>{FETCH_ERROR_MESSAGE}</Message>) || (
            <ProductDetail {...data} />
          )
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
