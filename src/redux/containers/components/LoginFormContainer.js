import { connect } from 'react-redux';
import * as sessionOperations from '../../operations/sessionOperations';
import LoginForm from '../../../components/LoginForm/LoginForm';
import { IS_LOADING } from '../../selectors/LoadingSerector';

const mapStateToProps = state => ({
  isLoading: IS_LOADING(state),
});

const mapDispatchToProps = dispatch => ({
  onLogin: credentials => dispatch(sessionOperations.login(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
