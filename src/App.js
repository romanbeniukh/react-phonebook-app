import React, { useEffect } from 'react';
import T from 'prop-types';
import Header from './redux/containers/layouts/HeaderContainer';
import PageRoutes from './router/PageRoutes';
import Notification from './redux/containers/components/NotificationContainer';
import Progress from './components/Progress/Progress';

const App = ({ isLoading, refreshUser, isRefreshingUser }) => {
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  return (
    <>
      <Header />
      {!isRefreshingUser && <PageRoutes />}
      <Notification />
      {isLoading && <Progress />}
    </>
  );
};

App.propTypes = {
  isLoading: T.bool.isRequired,
  refreshUser: T.func.isRequired,
  isRefreshingUser: T.bool.isRequired,
};

export default App;
