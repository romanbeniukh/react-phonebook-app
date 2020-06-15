import { createReducer } from '@reduxjs/toolkit';
import { LOGIN_SUCCESS_ACTION } from '../../actions/sessionActions/LoginActions';
import { SIGNUP_SUCCESS_ACTION } from '../../actions/sessionActions/SignupActions';
import { LOGOUT_ACTION } from '../../actions/sessionActions/LogoutActions';

const userReducer = createReducer(
  {},
  {
    [LOGIN_SUCCESS_ACTION]: (state, action) => {
      return action.payload.user;
    },
    [SIGNUP_SUCCESS_ACTION]: (state, action) => {
      return action.payload.user;
    },
    [LOGOUT_ACTION]: () => {
      return {};
    },
  },
);

export default userReducer;
