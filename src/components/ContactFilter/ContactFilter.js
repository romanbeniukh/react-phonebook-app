import React from 'react';
import T from 'prop-types';

const ContactFilter = ({ changeFilter, value }) => (
  <div className="contact-filter">
    <input
      onChange={e => changeFilter(e.currentTarget.value)}
      value={value}
      maxLength={20}
      placeholder="Введите имя контакта..."
      type="text"
      name="search"
    />
  </div>
);

ContactFilter.propTypes = {
  changeFilter: T.func.isRequired,
  value: T.string.isRequired,
};

export default ContactFilter;
