import { createReducer } from '@reduxjs/toolkit';
import { LOGIN_SUCCESS_ACTION } from '../../actions/sessionActions/LoginActions';
import { SIGNUP_SUCCESS_ACTION } from '../../actions/sessionActions/SignupActions';
import { LOGOUT_SUCCESS_ACTION } from '../../actions/sessionActions/LogoutActions';
import { REFRESH_USER_SUCCESS_ACTION } from '../../actions/sessionActions/RefreshUserActions';

const userReducer = createReducer(
  {},
  {
    [LOGIN_SUCCESS_ACTION]: (state, action) => {
      return action.payload.user;
    },
    [SIGNUP_SUCCESS_ACTION]: (state, action) => {
      return action.payload.user;
    },
    [LOGOUT_SUCCESS_ACTION]: () => {
      return {};
    },
    [REFRESH_USER_SUCCESS_ACTION]: (state, action) => {
      return action.payload;
    },
  },
);

export default userReducer;
