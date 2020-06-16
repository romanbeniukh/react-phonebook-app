import React from 'react';
import T from 'prop-types';
import { TextField } from '@material-ui/core';

const ContactFilter = ({ changeFilter, value }) => (
  <div className="contact-filter">
    <TextField
      className="form__element form__element--input"
      id="search"
      label="Search contacts by name"
      variant="outlined"
      name="search"
      onChange={e => changeFilter(e.currentTarget.value)}
      value={value}
      autoComplete="off"
      fullWidth
    />
  </div>
);

ContactFilter.propTypes = {
  changeFilter: T.func.isRequired,
  value: T.string.isRequired,
};

export default ContactFilter;
