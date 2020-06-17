import { createReducer } from '@reduxjs/toolkit';
import { ADD_NOTIFICATION_ACTION, CLOSE_NOTIFICATION_ACTION } from '../actions/NotificationActions';
import { LOGIN_ERROR_ACTION } from '../actions/sessionActions/LoginActions';
import { SIGNUP_ERROR_ACTION } from '../actions/sessionActions/SignupActions';
import { REFRESH_USER_ERROR_ACTION } from '../actions/sessionActions/RefreshUserActions';
import { LOGOUT_ERROR_ACTION } from '../actions/sessionActions/LogoutActions';
import { DELETE_USER_ERROR_ACTION } from '../actions/sessionActions/DeleteUser';
import { GET_CONTACTS_ERROR_ACTION } from '../actions/contactsActions/GetContactsActions';
import { ADD_CONTACT_ERROR_ACTION } from '../actions/contactsActions/AddContactActions';
import { DELETE_CONTACT_ERROR_ACTION } from '../actions/contactsActions/DeleteContactActions';

const notificationReducer = createReducer(
  {},
  {
    [ADD_NOTIFICATION_ACTION]: (state, action) => {
      return action.payload;
    },
    [CLOSE_NOTIFICATION_ACTION]: () => {
      return {};
    },
    [LOGIN_ERROR_ACTION]: (state, action) => {
      return action.payload;
    },
    [SIGNUP_ERROR_ACTION]: (state, action) => {
      return action.payload;
    },
    [REFRESH_USER_ERROR_ACTION]: (state, action) => {
      return action.payload;
    },
    [LOGOUT_ERROR_ACTION]: (state, action) => {
      return action.payload;
    },
    [DELETE_USER_ERROR_ACTION]: (state, action) => {
      return action.payload;
    },
    [GET_CONTACTS_ERROR_ACTION]: (state, action) => {
      return action.payload;
    },
    [ADD_CONTACT_ERROR_ACTION]: (state, action) => {
      return action.payload;
    },
    [DELETE_CONTACT_ERROR_ACTION]: (state, action) => {
      return action.payload;
    },
  },
);

export default notificationReducer;
