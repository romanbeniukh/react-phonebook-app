import { combineReducers } from 'redux';
import sessionReducer from './Session';
import contactsReducer from './ContactsReducer';
import filterReducer from './ContactFilterReducer';
import editContact from './ContactEditReducer';
import notificationReducer from './NotificationReducer';
import loadingReducer from './LoadingReducer';

export default combineReducers({
  session: sessionReducer,
  contacts: contactsReducer,
  filter: filterReducer,
  edit: editContact,
  notification: notificationReducer,
  isLoading: loadingReducer,
});
