import React, { useEffect } from 'react';
import T from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ContactList from '../redux/containers/ContactsListContainer';
import ContactForm from '../redux/containers/ContactFormContainer';
import Section from '../layouts/Section';
import ContactFilter from '../redux/containers/ContactFilterContainer';

const ContactsPage = ({ isAuth, history, getContacts, contactsLength }) => {
  useEffect(() => {
    if (!isAuth) history.replace('/login');
    isAuth && getContacts();
  }, [isAuth, history, getContacts]);

  return (
    <>
      <div className="form__page-wrap">
        <ContactForm />
        <Section title="Contacts" hiddenTitle={false}>
          {contactsLength >= 2 && <ContactFilter />}
          <ContactList />
        </Section>
      </div>
    </>
  );
};

ContactsPage.propTypes = {
  isAuth: T.bool.isRequired,
  getContacts: T.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  contactsLength: T.number.isRequired,
};

export default ContactsPage;
