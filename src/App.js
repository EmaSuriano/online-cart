import React from 'react';
import { Route } from 'react-router-dom';
import { AppWrapper } from 'shared/components';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/Home';
import Product from './screens/Product';

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <Route path="/product/:id" component={Product} />
      <Route component={Home} />
    </AppWrapper>
  </Provider>
);

export default App;
