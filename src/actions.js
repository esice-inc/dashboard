import { actions } from './reducer';

export const loadUser = ({ dispatch, user }) => {
  dispatch({
    user,
    type: actions.UPDATE_USER,
  });
};
