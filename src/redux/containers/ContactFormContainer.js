import { connect } from 'react-redux';
import { addContact } from '../operations/contactsOperations';
import ContactForm from '../../components/ContactForm/ContactForm';
import { GET_ALL_CONTACTS } from '../selectors/ContactsSelector';
import toggleNotification from '../operations/toggleNotification';
import { IS_LOADING } from '../selectors/LoadingSerector';

const mapStateToProps = state => ({
  contacts: GET_ALL_CONTACTS(state),
  isLoading: IS_LOADING(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
  toggleNotification: message => dispatch(toggleNotification(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
