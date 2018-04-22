import React from 'react';
import { Footer } from 'shared/components';
import HomeGrid from './components/HomeGrid';
import ProductFilters from './components/ProductFilters';
import ProductList from './components/ProductList';

// Layout component
const Home = () => (
  <HomeGrid>
    <ProductFilters />
    <ProductList />
    <Footer />
  </HomeGrid>
);

export default Home;
