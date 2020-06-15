import React from 'react';
import T from 'prop-types';
import Header from './redux/containers/HeaderContainer';
import PageRoutes from './router/PageRoutes';
import Notification from './redux/containers/NotificationContainer';
import Progress from './components/Progress/Progress';

const App = ({ isLoading }) => (
  <>
    <Header />
    <PageRoutes />
    <Notification />
    {isLoading && <Progress />}
  </>
);

App.propTypes = {
  isLoading: T.bool.isRequired,
};

export default App;
