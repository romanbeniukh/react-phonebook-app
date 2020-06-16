import React, { useEffect } from 'react';
import T from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ContactList from '../redux/containers/ContactsListContainer';
import ContactForm from '../redux/containers/ContactFormContainer';

const ContactsPage = ({ isAuth, history, getContacts }) => {
  useEffect(() => {
    if (!isAuth) history.replace('/login');
    isAuth && getContacts();
  }, [isAuth, history, getContacts]);

  return (
    <>
      <ContactForm />
      <ContactList />
    </>
  );
};

ContactsPage.propTypes = {
  isAuth: T.bool.isRequired,
  getContacts: T.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default ContactsPage;
