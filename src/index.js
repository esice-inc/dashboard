import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.css';

import API from './api';
import store from './store';
import OrdersDashboard from './pages/sales/OrdersDashboard';
import PaymentsDashboard from './pages/sales/PaymentsDashboard';
import * as serviceWorker from './serviceWorker';
import './index.css';

const orders = (props) => {
  return (
    <Provider store={store}>
      <OrdersDashboard {...props} />
    </Provider>
  );
};

const payments = (props) => {
  return (
    <Provider store={store}>
      <PaymentsDashboard {...props} />
    </Provider>
  );
};

ReactDOM.render(
  <Router>
    <Route path="/orders" render={orders}/>
    <Route path="/payments" render={payments}/>
    <Route />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
