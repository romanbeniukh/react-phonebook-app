import { createReducer } from '@reduxjs/toolkit';
import { ADD_NOTIFICATION_ACTION, CLOSE_NOTIFICATION_ACTION } from '../actions/NotificationActions';
import { LOGIN_ERROR_ACTION } from '../actions/sessionActions/LoginActions';
import { SIGNUP_ERROR_ACTION } from '../actions/sessionActions/SignupActions';

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
  },
);

export default notificationReducer;
