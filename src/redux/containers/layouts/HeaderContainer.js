import { connect } from 'react-redux';
import { GET_AUTH, GET_USER_NAME } from '../../selectors/SessionSelectors';
import { logout } from '../../operations/sessionOperations';
import Header from '../../../layouts/Header';

const mapStateToProps = state => ({
  isAuth: GET_AUTH(state),
  userName: GET_USER_NAME(state),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
