import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import 'semantic-ui-css/semantic.css';

// import API from './api';
import store from './store';
import { loadUser } from './actions';
import OrdersDashboard from './pages/sales/OrdersDashboard';
import PaymentsDashboard from './pages/sales/PaymentsDashboard';
import Index from './pages/index/Index';
import Secure from './components/secure/Secure';
import * as serviceWorker from './serviceWorker';
import './index.css';

const secure = (props) => (
  <CookiesProvider>
    <Secure {...props}/>
  </CookiesProvider>
);

const orders = (props) => {
  props.redirectTo = '/';
  props.content = ({ user }) => {
    loadUser({ dispatch: store.dispatch, user });

    return (
      <Provider store={store}>
        <OrdersDashboard/>
      </Provider>
    );
  };

  return secure(props);
};

const payments = (props) => {
  props.redirectTo = '/';
  props.content = ({ user }) => {
    loadUser({ dispatch: store.dispatch, user });

    return (
      <Provider store={store}>
        <PaymentsDashboard/>
      </Provider>
    );
  };

  return secure(props);
};

const index = (props) => {
  props.redirectTo = null;
  props.content = ({ user }) => {

    if (user) {
      // This should show a menu instead of redirect
      console.log(user);
      props.history.replace('/orders');
    }

    return (
      <Provider store={store}>
        <Index loginURL={process.env.REACT_APP_LOGIN_URL}/>
      </Provider>
    );
  };

  return secure(props);
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
