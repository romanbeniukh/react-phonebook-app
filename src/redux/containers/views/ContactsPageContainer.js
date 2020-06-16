import { connect } from 'react-redux';
import ContactsPage from '../../../views/ContactsPage';
import { GET_AUTH } from '../../selectors/SessionSelectors';
import { getContacts } from '../../operations/contactsOperations';

const mapStateToProps = state => ({
  isAuth: GET_AUTH(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
