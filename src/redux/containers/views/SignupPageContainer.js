import { connect } from 'react-redux';
import SignupPage from '../../../views/SignupPage';
import { GET_AUTH } from '../../selectors/SessionSelectors';

const mapStateToProps = state => ({
  isAuth: GET_AUTH(state),
});

export default connect(mapStateToProps, null)(SignupPage);
