import { connect } from 'react-redux';
import { GET_NOTIFICATION_MESSAGE } from '../selectors/NotificationSelector';
import { IS_LOADING } from '../selectors/LoadingSerector';
import App from '../../App';

const mapStateToProps = state => ({
  notificationMessage: GET_NOTIFICATION_MESSAGE(state),
  isLoading: IS_LOADING(state),
});

export default connect(mapStateToProps, null)(App);
