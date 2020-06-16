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

const ContactList = ({ contacts, deleteContact, isLoading, filteredContacts }) => (
  <>
    {contacts.length ? (
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
    {!isLoading && !contacts.length && <span>Not contacts :(</span>}
  </>
);

ContactList.propTypes = {
  contacts: T.arrayOf(T.object),
  filteredContacts: T.arrayOf(T.object),
  isLoading: T.bool.isRequired,
  deleteContact: T.func.isRequired,
  // resetFilter: T.func.isRequired,
  // toggleNotification: T.func.isRequired,
};

export default ContactList;
