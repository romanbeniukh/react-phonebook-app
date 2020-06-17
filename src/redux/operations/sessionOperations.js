import { LOGIN_REQUEST_ACTION, LOGIN_SUCCESS_ACTION, LOGIN_ERROR_ACTION } from '../actions/sessionActions/LoginActions';
import {
  SIGNUP_REQUEST_ACTION,
  SIGNUP_SUCCESS_ACTION,
  SIGNUP_ERROR_ACTION,
} from '../actions/sessionActions/SignupActions';
import {
  LOGOUT_REQUEST_ACTION,
  LOGOUT_SUCCESS_ACTION,
  LOGOUT_ERROR_ACTION,
} from '../actions/sessionActions/LogoutActions';
import {
  REFRESH_USER_REQUEST_ACTION,
  REFRESH_USER_SUCCESS_ACTION,
  REFRESH_USER_ERROR_ACTION,
} from '../actions/sessionActions/RefreshUserActions';
import {
  DELETE_USER_REQUEST_ACTION,
  DELETE_USER_SUCCESS_ACTION,
  DELETE_USER_ERROR_ACTION,
} from '../actions/sessionActions/DeleteUser';
import api from '../../api/requests';
import toggleNotification from './toggleNotification';
import { GET_TOKEN } from '../selectors/SessionSelectors';

export const login = credentials => dispatch => {
  dispatch(LOGIN_REQUEST_ACTION());

  api
    .login(credentials)
    .then(res => {
      api.setAuthToken(res.token);
      dispatch(LOGIN_SUCCESS_ACTION(res));
    })
    .catch(err => {
      dispatch(LOGIN_ERROR_ACTION(err));
      dispatch(toggleNotification());
    });
};

export const signup = credentials => dispatch => {
  dispatch(SIGNUP_REQUEST_ACTION());

  api
    .signup(credentials)
    .then(res => {
      api.setAuthToken(res.token);
      dispatch(SIGNUP_SUCCESS_ACTION(res));
    })
    .catch(err => {
      dispatch(SIGNUP_ERROR_ACTION(err));
      dispatch(toggleNotification());
    });
};

export const logout = () => dispatch => {
  dispatch(LOGOUT_REQUEST_ACTION());

  api
    .logout()
    .then(() => {
      api.clearAuthToken();
      dispatch(LOGOUT_SUCCESS_ACTION());
    })
    .catch(err => {
      dispatch(LOGOUT_ERROR_ACTION(err));
      dispatch(toggleNotification());
    });
};

export const refreshUser = () => (dispatch, getState) => {
  const token = GET_TOKEN(getState());

  if (!token) return;

  api.setAuthToken(token);
  dispatch(REFRESH_USER_REQUEST_ACTION());

  api
    .refreshUser(token)
    .then(res => {
      dispatch(REFRESH_USER_SUCCESS_ACTION(res));
    })
    .catch(err => {
      dispatch(REFRESH_USER_ERROR_ACTION(err));
      dispatch(toggleNotification());
    });
};

export const deleteUser = () => dispatch => {
  dispatch(DELETE_USER_REQUEST_ACTION());

  api
    .deleteUser()
    .then(res => {
      api.clearAuthToken();
      dispatch(DELETE_USER_SUCCESS_ACTION(res));
    })
    .catch(err => {
      dispatch(DELETE_USER_ERROR_ACTION(err));
    });
};
