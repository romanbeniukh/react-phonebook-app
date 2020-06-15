import { createReducer } from '@reduxjs/toolkit';
import { LOGIN_SUCCESS_ACTION } from '../../actions/sessionActions/LoginActions';
import { SIGNUP_SUCCESS_ACTION } from '../../actions/sessionActions/SignupActions';
import { LOGOUT_ACTION } from '../../actions/sessionActions/LogoutActions';

const authReducer = createReducer(false, {
  [LOGIN_SUCCESS_ACTION]: () => {
    return true;
  },
  [SIGNUP_SUCCESS_ACTION]: () => {
    return true;
  },
  [LOGOUT_ACTION]: () => {
    return false;
  },
});

export default authReducer;
