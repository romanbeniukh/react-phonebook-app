import { connect } from 'react-redux';
import { GET_AUTH, GET_USER_NAME, GET_TOKEN } from '../selectors/SessionSelectors';
import { logout } from '../operations/sessionOperations';
import Header from '../../layouts/Header';

const mapStateToProps = state => ({
  isAuth: GET_AUTH(state),
  userName: GET_USER_NAME(state),
  token: GET_TOKEN(state),
});

const mapDispatchToProps = dispatch => ({
  logout: token => dispatch(logout(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
