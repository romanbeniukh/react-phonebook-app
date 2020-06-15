import React, { useEffect } from 'react';
import T from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

const ContactsPage = ({ isAuth, history }) => {
  useEffect(() => {
    if (!isAuth) history.replace('/login');
  }, [isAuth, history]);

  return (
    <>
      <span>ContactsPage</span>
    </>
  );
};

ContactsPage.propTypes = {
  isAuth: T.bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default ContactsPage;
