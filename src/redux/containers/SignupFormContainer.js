import { connect } from 'react-redux';
import SignupForm from '../../components/SignupForm/SignupForm';
import * as sessionOperations from '../operations/sessionOperations';
import { IS_LOADING } from '../selectors/LoadingSerector';

const mapStateToProps = state => ({
  isLoading: IS_LOADING(state),
});

const mapDispatchToProps = dispatch => ({
  onSignup: credentials => dispatch(sessionOperations.signup(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
