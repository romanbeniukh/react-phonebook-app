import React from 'react';
import T from 'prop-types';
import { Avatar, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const UserInfo = ({ user, deleteUser }) => (
  <>
    <div className="form__avatar-wrap">
      <Avatar style={{ backgroundColor: '#dc024e' }}>
        <AccountCircle />
      </Avatar>
      <h2 className="title">{user.name}</h2>
      <span>{user.email}</span>
      <br />
      <Button color="secondary" variant="contained" aria-label="delete" onClick={() => deleteUser()}>
        Delete account
      </Button>
    </div>
  </>
);

UserInfo.propTypes = {
  user: T.objectOf(T.string),
  deleteUser: T.func.isRequired,
};

export default UserInfo;
