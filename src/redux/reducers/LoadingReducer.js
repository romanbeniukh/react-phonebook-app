import { createReducer } from '@reduxjs/toolkit';
import { LOGIN_SUCCESS_ACTION, LOGIN_REQUEST_ACTION, LOGIN_ERROR_ACTION } from '../actions/sessionActions/LoginActions';
import {
  SIGNUP_SUCCESS_ACTION,
  SIGNUP_REQUEST_ACTION,
  SIGNUP_ERROR_ACTION,
} from '../actions/sessionActions/SignupActions';

const loadingReducer = createReducer(false, {
  [LOGIN_REQUEST_ACTION]: () => {
    return true;
  },
  [LOGIN_SUCCESS_ACTION]: () => {
    return false;
  },
  [LOGIN_ERROR_ACTION]: () => {
    return false;
  },
  [SIGNUP_REQUEST_ACTION]: () => {
    return true;
  },
  [SIGNUP_SUCCESS_ACTION]: () => {
    return false;
  },
  [SIGNUP_ERROR_ACTION]: () => {
    return false;
  },
});

export default loadingReducer;
