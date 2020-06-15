import { LOGIN_REQUEST_ACTION, LOGIN_SUCCESS_ACTION, LOGIN_ERROR_ACTION } from '../actions/sessionActions/LoginActions';
import {
  SIGNUP_REQUEST_ACTION,
  SIGNUP_SUCCESS_ACTION,
  SIGNUP_ERROR_ACTION,
} from '../actions/sessionActions/SignupActions';
import { LOGOUT_ACTION } from '../actions/sessionActions/LogoutActions';
import api from '../../api/sessionApi/requests';
import toggleNotification from './toggleNotification';

export const login = credentials => dispatch => {
  dispatch(LOGIN_REQUEST_ACTION());

  api
    .login(credentials)
    .then(res => {
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
      dispatch(SIGNUP_SUCCESS_ACTION(res));
    })
    .catch(err => {
      dispatch(SIGNUP_ERROR_ACTION(err));
      dispatch(toggleNotification());
    });
};

export const logout = token => dispatch => {
  api
    .logout(token)
    .then(() => {
      dispatch(LOGOUT_ACTION());
    })
    .catch(err => {
      console.log(err);
    });
};
