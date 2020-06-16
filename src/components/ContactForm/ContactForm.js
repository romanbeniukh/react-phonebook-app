import React, { Component } from 'react';
import { Button, TextField, Avatar, CircularProgress } from '@material-ui/core';
import InputMask from 'react-input-mask';
import T from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';

const initialState = {
  name: '',
  number: '',
  isError: false,
};

class ContactForm extends Component {
  state = {
    ...initialState,
  };

  static propTypes = {
    addContact: T.func.isRequired,
    toggleNotification: T.func.isRequired,
    isLoading: T.bool.isRequired,
    contacts: T.arrayOf(T.object),
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact, toggleNotification } = this.props;

    if (this.checkUniqName({ name })) {
      toggleNotification({
        message: `${name} already in list!`,
      });

      return;
    }

    if (name && number.length === 17) {
      const formData = { name, number };
      addContact(formData);
      this.setState(initialState);
    } else {
      this.setState({
        isError: true,
      });
    }
  };

  checkUniqName = contact => {
    const { contacts } = this.props;

    return contacts.some(contactName => contactName.name.toLowerCase() === contact.name.toLowerCase());
  };

  render() {
    const { name, number, isError } = this.state;
    const { isLoading } = this.props;

    return (
      <>
        <div className="form__avatar-wrap">
          <Avatar style={{ backgroundColor: '#dc024e' }}>
            <AccountCircle />
          </Avatar>
          <h2 className="title">Add contact</h2>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <TextField
            className="form__element form__element--input"
            id="Name"
            label="Name"
            variant="outlined"
            name="name"
            size="small"
            disabled={isLoading}
            onChange={this.handleChange}
            value={name}
            error={isError && !name}
            helperText={isError && !name ? 'This field is required' : ''}
            fullWidth
          />
          <InputMask
            mask="+380 99 999 99 99"
            maskChar={null}
            onChange={this.handleChange}
            value={number}
            disabled={isLoading}
          >
            {inputProps => (
              <TextField
                {...inputProps}
                className="form__element form__element--input"
                error={isError && number.length < 17}
                id="number"
                name="number"
                label="Phone"
                variant="outlined"
                size="small"
                helperText={isError && number.length < 17 ? 'Phone is not valid' : ''}
                fullWidth
              />
            )}
          </InputMask>
          <div className="form__btn-wrap">
            <Button
              className="form__element"
              onClick={this.handleSubmit}
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
              fullWidth
            >
              Add contact
            </Button>
            {isLoading && <CircularProgress size={24} className="form__btn-loaded" />}
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;
