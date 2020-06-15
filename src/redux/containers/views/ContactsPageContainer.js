import { connect } from 'react-redux';
import ContactsPage from '../../../views/ContactsPage';
import { GET_AUTH } from '../../selectors/SessionSelectors';

const mapStateToProps = state => ({
  isAuth: GET_AUTH(state),
});

export default connect(mapStateToProps, null)(ContactsPage);
