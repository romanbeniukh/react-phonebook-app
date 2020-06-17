import { connect } from 'react-redux';
import UserInfo from '../../../components/UserInfo/UserInfo';
import { GET_USER } from '../../selectors/SessionSelectors';
import { deleteUser } from '../../operations/sessionOperations';

const mapStateToProps = state => ({
  user: GET_USER(state),
});

const mapDispatchToProps = dispatch => ({
  deleteUser: () => dispatch(deleteUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
