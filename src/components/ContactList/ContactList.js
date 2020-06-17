import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircle from '@material-ui/icons/AccountCircle';
import T from 'prop-types';

const ContactList = ({ contactsLength, deleteContact, isLoading, filteredContacts }) => (
  <>
    {contactsLength ? (
      <List>
        {filteredContacts.map(contact => (
          <ListItem key={contact.id} className="contact-list__item">
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={contact.name} secondary={contact.number} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" color="secondary" onClick={() => deleteContact(contact.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    ) : (
      ''
    )}
    {!isLoading && !contactsLength && <span>Not contacts :(</span>}
  </>
);

ContactList.propTypes = {
  contactsLength: T.number.isRequired,
  filteredContacts: T.arrayOf(T.object),
  isLoading: T.bool.isRequired,
  deleteContact: T.func.isRequired,
};

export default ContactList;
