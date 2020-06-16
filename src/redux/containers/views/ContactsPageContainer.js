import { connect } from 'react-redux';
import ContactsPage from '../../../views/ContactsPage';
import { GET_AUTH } from '../../selectors/SessionSelectors';
import { getContacts } from '../../operations/contactsOperations';
import { GET_ALL_CONTACTS_LENGTH } from '../../selectors/ContactsSelector';

const mapStateToProps = state => ({
  isAuth: GET_AUTH(state),
  contactsLength: GET_ALL_CONTACTS_LENGTH(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
