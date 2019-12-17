import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import 'semantic-ui-css/semantic.css';

// import API from './api';
import store from './store';
import OrdersDashboard from './pages/sales/OrdersDashboard';
import PaymentsDashboard from './pages/sales/PaymentsDashboard';
import Index from './pages/index/Index';
import Secure from './components/secure/Secure';
import * as serviceWorker from './serviceWorker';
import './index.css';

const orders = (props) => {
  return (
    <CookiesProvider>
      <Secure redirectTo={'/'} history={props.history}>
        <Provider store={store}>
          <OrdersDashboard {...props} />
        </Provider>
      </Secure>
    </CookiesProvider>
  );
};

const payments = (props) => {
  return (
    <CookiesProvider>
      <Secure redirectTo={'/'} history={props.history}>
        <Provider store={store}>
          <PaymentsDashboard {...props} />
        </Provider>
      </Secure>
    </CookiesProvider>
  );
};

const index = (props) => {
  return (
    <Index {...props} loginURL={'http://auth.esice.local:8080/v1/login'}/>
  );
};

ReactDOM.render(
  <Router>
    <Route exact={true} path="/" render={index}/>
    <Route exact={true} path="/orders" render={orders}/>
    <Route exact={true} path="/payments" render={payments}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
