import { LOGIN_REQUEST_ACTION, LOGIN_SUCCESS_ACTION, LOGIN_ERROR_ACTION } from '../actions/sessionActions/LoginActions';
import {
  SIGNUP_REQUEST_ACTION,
  SIGNUP_SUCCESS_ACTION,
  SIGNUP_ERROR_ACTION,
} from '../actions/sessionActions/SignupActions';
import { LOGOUT_ACTION } from '../actions/sessionActions/LogoutActions';
import {
  REFRESH_USER_REQUEST_ACTION,
  REFRESH_USER_SUCCESS_ACTION,
  REFRESH_USER_ERROR_ACTION,
} from '../actions/sessionActions/RefreshUserActions';
import api from '../../api/sessionApi/requests';
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
  api
    .logout()
    .then(() => {
      api.clearAuthToken();
      dispatch(LOGOUT_ACTION());
    })
    .catch(err => {
      console.log(err);
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
