import { connect } from 'react-redux';
import LoginPage from '../../../views/LoginPage';
import { GET_AUTH } from '../../selectors/SessionSelectors';

const mapStateToProps = state => ({
  isAuth: GET_AUTH(state),
});

export default connect(mapStateToProps, null)(LoginPage);
