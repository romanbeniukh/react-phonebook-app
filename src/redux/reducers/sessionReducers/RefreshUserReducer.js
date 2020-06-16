import { createReducer } from '@reduxjs/toolkit';
import {
  REFRESH_USER_REQUEST_ACTION,
  REFRESH_USER_SUCCESS_ACTION,
  REFRESH_USER_ERROR_ACTION,
} from '../../actions/sessionActions/RefreshUserActions';

const refreshUserReducer = createReducer(false, {
  [REFRESH_USER_REQUEST_ACTION]: () => {
    return true;
  },
  [REFRESH_USER_SUCCESS_ACTION]: () => {
    return false;
  },
  [REFRESH_USER_ERROR_ACTION]: () => {
    return false;
  },
});

export default refreshUserReducer;
