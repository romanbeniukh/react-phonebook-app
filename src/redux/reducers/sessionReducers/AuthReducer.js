import { createReducer } from '@reduxjs/toolkit';
import { LOGIN_SUCCESS_ACTION } from '../../actions/sessionActions/LoginActions';
import { SIGNUP_SUCCESS_ACTION } from '../../actions/sessionActions/SignupActions';
import { LOGOUT_SUCCESS_ACTION } from '../../actions/sessionActions/LogoutActions';
import { REFRESH_USER_SUCCESS_ACTION } from '../../actions/sessionActions/RefreshUserActions';

const authReducer = createReducer(false, {
  [LOGIN_SUCCESS_ACTION]: () => {
    return true;
  },
  [SIGNUP_SUCCESS_ACTION]: () => {
    return true;
  },
  [LOGOUT_SUCCESS_ACTION]: () => {
    return false;
  },
  [REFRESH_USER_SUCCESS_ACTION]: () => {
    return true;
  },
});

export default authReducer;
