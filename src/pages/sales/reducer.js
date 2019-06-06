import { combineReducers } from 'redux';

const quotations = [];
const orders = [];
const deliveries = [];

const actions = {
  SET_QUOTATIONS: 'SET_QUOTATIONS',
  SET_ORDERS: 'SET_ORDERS',
  SET_DELIVERIES: 'SET_DELIVERIES',
  START_LOAD: 'START_LOAD',
  END_LOAD: 'END_LOAD',
};

function quotationsReducer(state = quotations, action) {
  switch(action.type) {
    case actions.SET_QUOTATIONS:
      return action.quotations;
    default:
      return state;
  }
}

function ordersReducer(state = orders, action) {
  switch(action.type) {
    case actions.SET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}

function deliveriesReducer(state = deliveries, action) {
  switch(action.type) {
    case actions.SET_DELIVERIES:
      return action.deliveries;
    default:
      return state;
  }
}

function loadingReducer(state = null, action) {
  switch(action.type) {
    case actions.START_LOAD:
      return true;
    case actions.END_LOAD:
      return false;
    default:
      return null;
  }
}

const reducer = combineReducers({
  isLoading: loadingReducer,
  quotations: quotationsReducer,
  orders: ordersReducer,
  deliveries: deliveriesReducer,
});


export {
  reducer,
  actions
};


