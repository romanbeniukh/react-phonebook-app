import React, { useEffect } from 'react';
import T from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Section from '../layouts/Section';
import UserInfo from '../redux/containers/components/UserInfoContainer';

const CabinetPage = ({ isAuth, history }) => {
  useEffect(() => {
    if (!isAuth) history.replace('/login');
  }, [isAuth, history]);

  return (
    <>
      <Section title="Cabinet" hiddenTitle>
        <UserInfo />
      </Section>
    </>
  );
};

CabinetPage.propTypes = {
  isAuth: T.bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default CabinetPage;
