import React, { useEffect } from 'react';
import T from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import LoginForm from '../redux/containers/LoginFormContainer';
import Section from '../layouts/Section';

const LoginPage = ({ isAuth, history }) => {
  useEffect(() => {
    if (isAuth) history.replace('/');
  }, [isAuth, history]);

  return (
    <div className="form__page-wrap">
      <Section title="Login page" hiddenTitle>
        <LoginForm />
      </Section>
    </div>
  );
};

LoginPage.propTypes = {
  isAuth: T.bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default LoginPage;
