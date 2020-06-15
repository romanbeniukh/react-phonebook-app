import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import tokenReducer from './TokenReducer';
import authReducer from './AuthReducer';

const sessionReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isAuth: authReducer,
});

export default sessionReducer;
