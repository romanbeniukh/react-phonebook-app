import { connect } from 'react-redux';
import { GET_ALL_CONTACTS, GET_FILTERED_CONTACTS } from '../selectors/ContactsSelector';
import ContactList from '../../components/ContactList/ContactList';
import { deleteContact } from '../operations/contactsOperations';
import { IS_LOADING } from '../selectors/LoadingSerector';

const mapStateToProps = state => ({
  contacts: GET_ALL_CONTACTS(state),
  filteredContacts: GET_FILTERED_CONTACTS(state),
  isLoading: IS_LOADING(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
