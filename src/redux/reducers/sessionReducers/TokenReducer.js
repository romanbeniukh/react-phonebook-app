import { createReducer } from '@reduxjs/toolkit';
import { LOGIN_SUCCESS_ACTION } from '../../actions/sessionActions/LoginActions';
import { SIGNUP_SUCCESS_ACTION } from '../../actions/sessionActions/SignupActions';
import { LOGOUT_ACTION } from '../../actions/sessionActions/LogoutActions';

const tokenReducer = createReducer('', {
  [LOGIN_SUCCESS_ACTION]: (state, action) => {
    return action.payload.token;
  },
  [SIGNUP_SUCCESS_ACTION]: (state, action) => {
    return action.payload.token;
  },
  [LOGOUT_ACTION]: () => {
    return '';
  },
});

export default tokenReducer;
