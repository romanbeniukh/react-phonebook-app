import {
  ADD_CONTACT_REQUEST_ACTION,
  ADD_CONTACT_SUCCESS_ACTION,
  ADD_CONTACT_ERROR_ACTION,
} from '../actions/contactsActions/AddContactActions';
import {
  DELETE_CONTACT_REQUEST_ACTION,
  DELETE_CONTACT_SUCCESS_ACTION,
  DELETE_CONTACT_ERROR_ACTION,
} from '../actions/contactsActions/DeleteContactActions';
import {
  GET_CONTACTS_REQUEST_ACTION,
  GET_CONTACTS_SUCCESS_ACTION,
  GET_CONTACTS_ERROR_ACTION,
} from '../actions/contactsActions/GetContactsActions';
import api from '../../api/sessionApi/requests';
import toggleNotification from './toggleNotification';

export const getContacts = () => dispatch => {
  dispatch(GET_CONTACTS_REQUEST_ACTION());

  api
    .getContacts()
    .then(res => {
      dispatch(GET_CONTACTS_SUCCESS_ACTION(res));
    })
    .catch(err => {
      dispatch(GET_CONTACTS_ERROR_ACTION(err));
      dispatch(toggleNotification());
    });
};

export const deleteContact = id => dispatch => {
  dispatch(DELETE_CONTACT_REQUEST_ACTION());

  api
    .deleteContact(id)
    .then(() => {
      dispatch(DELETE_CONTACT_SUCCESS_ACTION(id));
    })
    .catch(err => {
      dispatch(DELETE_CONTACT_ERROR_ACTION(err));
    });
};

export const addContact = contact => dispatch => {
  dispatch(ADD_CONTACT_REQUEST_ACTION());

  api
    .setContact(contact)
    .then(res => {
      dispatch(ADD_CONTACT_SUCCESS_ACTION(res));
    })
    .catch(err => {
      dispatch(ADD_CONTACT_ERROR_ACTION(err));
    });
};
