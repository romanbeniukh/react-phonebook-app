import { connect } from 'react-redux';
import { IS_LOADING } from '../selectors/LoadingSerector';
import { refreshUser } from '../operations/sessionOperations';
import { GET_TOKEN, IS_REFRESH_USER } from '../selectors/SessionSelectors';
import App from '../../App';

const mapStateToProps = state => ({
  token: GET_TOKEN(state),
  isLoading: IS_LOADING(state),
  isRefreshingUser: IS_REFRESH_USER(state),
});

const mapDispatchToProps = dispatch => ({
  refreshUser: token => dispatch(refreshUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
