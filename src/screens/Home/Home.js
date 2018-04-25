import React, { Fragment } from 'react';
import { Footer } from 'shared/components';
import HomeGrid from './components/HomeGrid';
import ProductFilters from './components/ProductFilters';
import Products from './components/Products';

const Home = () => (
  <Fragment>
    <HomeGrid>
      <ProductFilters />
      <Products />
    </HomeGrid>
    <Footer />
  </Fragment>
);

export default Home;
