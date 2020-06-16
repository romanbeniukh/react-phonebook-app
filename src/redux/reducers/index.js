import { combineReducers } from 'redux';
import contactsReducer from './contactsReducers/ContactsReducer';
import filterReducer from './contactsReducers/ContactFilterReducer';
import notificationReducer from './NotificationReducer';
import loadingReducer from './LoadingReducer';
import userReducer from './sessionReducers/UserReducer';
import tokenReducer from './sessionReducers/TokenReducer';
import authReducer from './sessionReducers/AuthReducer';
import refreshUserReducer from './sessionReducers/RefreshUserReducer';

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  isAuth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
  notification: notificationReducer,
  isLoading: loadingReducer,
  isRefreshingUser: refreshUserReducer,
});
