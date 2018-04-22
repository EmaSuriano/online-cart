import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppWrapper } from 'shared/components';
import Home from './screens/Home';
import Product from './screens/Product';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWrapper>
        <Route path="/product/:id" component={Product} />
        <Route component={Home} />
      </AppWrapper>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
