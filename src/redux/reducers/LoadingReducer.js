import { createReducer } from '@reduxjs/toolkit';
import { LOGIN_SUCCESS_ACTION, LOGIN_REQUEST_ACTION, LOGIN_ERROR_ACTION } from '../actions/sessionActions/LoginActions';
import {
  SIGNUP_SUCCESS_ACTION,
  SIGNUP_REQUEST_ACTION,
  SIGNUP_ERROR_ACTION,
} from '../actions/sessionActions/SignupActions';
import {
  REFRESH_USER_REQUEST_ACTION,
  REFRESH_USER_SUCCESS_ACTION,
  REFRESH_USER_ERROR_ACTION,
} from '../actions/sessionActions/RefreshUserActions';
import {
  LOGOUT_REQUEST_ACTION,
  LOGOUT_SUCCESS_ACTION,
  LOGOUT_ERROR_ACTION,
} from '../actions/sessionActions/LogoutActions';
import {
  GET_CONTACTS_SUCCESS_ACTION,
  GET_CONTACTS_REQUEST_ACTION,
  GET_CONTACTS_ERROR_ACTION,
} from '../actions/contactsActions/GetContactsActions';
import {
  ADD_CONTACT_REQUEST_ACTION,
  ADD_CONTACT_SUCCESS_ACTION,
  ADD_CONTACT_ERROR_ACTION,
} from '../actions/contactsActions/AddContactActions';
import {
  DELETE_CONTACT_REQUEST_ACTION,
  DELETE_CONTACT_SUCCESS_ACTION,
  DELETE_CONTACT_ERROR_ACTION,
} from '../actions/contactsActions/DeleteContactActions';

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
  [REFRESH_USER_REQUEST_ACTION]: () => {
    return true;
  },
  [REFRESH_USER_SUCCESS_ACTION]: () => {
    return false;
  },
  [REFRESH_USER_ERROR_ACTION]: () => {
    return false;
  },
  [LOGOUT_REQUEST_ACTION]: () => {
    return true;
  },
  [LOGOUT_SUCCESS_ACTION]: () => {
    return false;
  },
  [LOGOUT_ERROR_ACTION]: () => {
    return false;
  },
  [GET_CONTACTS_REQUEST_ACTION]: () => {
    return true;
  },
  [GET_CONTACTS_SUCCESS_ACTION]: () => {
    return false;
  },
  [GET_CONTACTS_ERROR_ACTION]: () => {
    return false;
  },
  [ADD_CONTACT_REQUEST_ACTION]: () => {
    return true;
  },
  [ADD_CONTACT_SUCCESS_ACTION]: () => {
    return false;
  },
  [ADD_CONTACT_ERROR_ACTION]: () => {
    return false;
  },
  [DELETE_CONTACT_REQUEST_ACTION]: () => {
    return true;
  },
  [DELETE_CONTACT_SUCCESS_ACTION]: () => {
    return false;
  },
  [DELETE_CONTACT_ERROR_ACTION]: () => {
    return false;
  },
});

export default loadingReducer;
