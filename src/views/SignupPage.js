import React, { useEffect } from 'react';
import T from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Section from '../layouts/Section';
import SignupForm from '../redux/containers/SignupFormContainer';

const SignupPage = ({ isAuth, history }) => {
  useEffect(() => {
    if (isAuth) history.replace('/');
  }, [isAuth, history]);

  return (
    <div className="form__page-wrap">
      <Section title="Sign up page" hiddenTitle>
        <SignupForm />
      </Section>
    </div>
  );
};

SignupPage.propTypes = {
  isAuth: T.bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default SignupPage;
