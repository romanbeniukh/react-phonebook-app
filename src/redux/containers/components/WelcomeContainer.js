import { connect } from 'react-redux';
import Welcome from '../../../components/Welcome/Welcome';
import { GET_USER_NAME, GET_AUTH } from '../../selectors/SessionSelectors';

const mapStateToProps = state => ({
  isAuth: GET_AUTH(state),
  userName: GET_USER_NAME(state),
});

export default connect(mapStateToProps, null)(Welcome);
