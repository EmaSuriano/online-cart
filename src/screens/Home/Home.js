import React from 'react';
import { Footer } from 'shared/components';
import HomeGrid from './components/HomeGrid';
import ProductFilters from './components/ProductFilters';
import Products from './components/Products';

// Layout component
const Home = () => (
  <HomeGrid>
    <ProductFilters />
    <Products />
    <Footer />
  </HomeGrid>
);

export default Home;
