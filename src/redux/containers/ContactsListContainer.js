import { connect } from 'react-redux';
import { GET_ALL_CONTACTS, GET_FILTERED_CONTACTS } from '../selectors/ContactsSelector';
import ContactList from '../../components/ContactList/ContactList';
import toggleNotification from '../operations/toggleNotification';
import { deleteContact } from '../operations/contactsOperations';
import { RESET_FILTER_ACTION } from '../actions/ContactFilterActions';
import { IS_LOADING } from '../selectors/LoadingSerector';

const mapStateToProps = state => ({
  contacts: GET_ALL_CONTACTS(state),
  filteredContacts: GET_FILTERED_CONTACTS(state),
  isLoading: IS_LOADING(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
  resetFilter: name => dispatch(RESET_FILTER_ACTION(name)),
  toggleNotification: message => dispatch(toggleNotification(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
