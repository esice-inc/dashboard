import { combineReducers } from 'redux';

import { reducer as salesReducer } from './pages/sales/reducer'

export default combineReducers({
  sales: salesReducer,
});
