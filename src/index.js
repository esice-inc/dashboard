import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.css';

import API from './api';
import store from './store';
import SalesDashboard from './pages/sales/SalesDashboard';
import * as serviceWorker from './serviceWorker';
import './index.css';

const sales = (props) => {
  return (
    <Provider store={store}>
      <SalesDashboard {...props} />
    </Provider>
  );
};

ReactDOM.render(
  <Router>
    <Route path="/sales" render={sales}/>
    <Route />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
