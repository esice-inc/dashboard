import { combineReducers } from 'redux';

const requirements = {};
const workOrders = {};
const deliveries = {};

const actions = {
  UPDATE_REQUIREMENTS: 'UPDATE_REQUIREMENTS',
  START_REQUIREMENTS_LOAD: 'START_REQUIREMENTS_LOAD',
  END_REQUIREMENTS_LOAD: 'END_REQUIREMENTSLOAD',

  UPDATE_WORK_ORDERS: 'UPDATE_WORK_ORDERS',
  START_WORK_ORDERS_LOAD: 'START_WORK_ORDERS_LOAD',
  END_WORK_ORDERS_LOAD: 'END_WORK_ORDERS_LOAD',

  UPDATE_DELIVERIES: 'UPDATE_DELIVERIES',
  START_DELIVIERIES_LOAD: 'START_DELIVIERIESLOAD',
  END_DELIVIERIES_LOAD: 'END_DELIVIERIES_LOAD',
};

function updateCards(prevState, cards) {
  const cardReducer = (newState, card) => {
    const prevCard = prevState[card.id];

    if (JSON.stringify(prevCard) !== JSON.stringify(card)) {
      newState[card.id] = card;
    }  else {
      newState[card.id] = prevCard;
    }

    return newState;
  }

  return Object.values(cards)
    .reduce(cardReducer, {});
}

function requirementsReducer(state = requirements, action) {
  switch(action.type) {
    case actions.UPDATE_REQUIREMENTS:
      return updateCards(state, action.requirements);
    default:
      return state;
  }
}

function workOrdersReducer(state = workOrders, action) {
  switch(action.type) {
    case actions.UPDATE_WORK_ORDERS:
      return updateCards(state, action.workOrders);
    default:
      return state;
  }
}

function deliveriesReducer(state = deliveries, action) {
  switch(action.type) {
    case actions.UPDATE_DELIVERIES:
      return updateCards(state, action.deliveries);
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
  // isLoading: loadingReducer,
  requirements: requirementsReducer,
  workOrders: workOrdersReducer,
  deliveries: deliveriesReducer,
});


export {
  reducer,
  actions
};

