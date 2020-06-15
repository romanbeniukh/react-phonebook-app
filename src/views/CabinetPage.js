import React, { useEffect } from 'react';
import T from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

const CabinetPage = ({ isAuth, history }) => {
  useEffect(() => {
    if (!isAuth) history.replace('/login');
  }, [isAuth, history]);

  return (
    <>
      <span>CabinetPage</span>
    </>
  );
};

CabinetPage.propTypes = {
  isAuth: T.bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default CabinetPage;
