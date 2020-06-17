import { createReducer } from '@reduxjs/toolkit';
import { GET_CONTACTS_SUCCESS_ACTION } from '../../actions/contactsActions/GetContactsActions';
import { DELETE_CONTACT_SUCCESS_ACTION } from '../../actions/contactsActions/DeleteContactActions';
import { ADD_CONTACT_SUCCESS_ACTION } from '../../actions/contactsActions/AddContactActions';
import { LOGOUT_SUCCESS_ACTION } from '../../actions/sessionActions/LogoutActions';
import { DELETE_USER_SUCCESS_ACTION } from '../../actions/sessionActions/DeleteUser';

const contactsReducer = createReducer([], {
  [GET_CONTACTS_SUCCESS_ACTION]: (state, action) => {
    return action.payload;
  },
  [DELETE_CONTACT_SUCCESS_ACTION]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [ADD_CONTACT_SUCCESS_ACTION]: (state, action) => {
    return [...state, action.payload];
  },
  [LOGOUT_SUCCESS_ACTION]: () => {
    return [];
  },
  [DELETE_USER_SUCCESS_ACTION]: () => {
    return [];
  },
});

export default contactsReducer;
