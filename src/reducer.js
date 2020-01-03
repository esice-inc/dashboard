import { combineReducers } from 'redux';

import { reducer as salesReducer } from './pages/sales/reducer'

const user = {};

export const actions = {
  UPDATE_USER: 'UPDATE_USER',
};

function userReducer(state = user, action) {
  switch(action.type) {
    case actions.UPDATE_USER:
      if (!action.user) return null;
      const { _json: { email }, picture, name, id } = action.user;
      return { email, picture, name, id };
    default:
      return state;
  }
}

export default combineReducers({
  user: userReducer,
  sales: salesReducer,
});
