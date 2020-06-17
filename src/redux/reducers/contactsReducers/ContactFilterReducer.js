import { createReducer } from '@reduxjs/toolkit';
import { FILTER_CONTACT_ACTION, RESET_FILTER_ACTION } from '../../actions/contactsActions/ContactFilterActions';
import { LOGOUT_SUCCESS_ACTION } from '../../actions/sessionActions/LogoutActions';
import { DELETE_USER_SUCCESS_ACTION } from '../../actions/sessionActions/DeleteUser';

const filterReducer = createReducer('', {
  [FILTER_CONTACT_ACTION]: (state, action) => {
    return action.payload;
  },
  [RESET_FILTER_ACTION]: () => {
    return '';
  },
  [LOGOUT_SUCCESS_ACTION]: () => {
    return '';
  },
  [DELETE_USER_SUCCESS_ACTION]: () => {
    return '';
  },
});

export default filterReducer;
