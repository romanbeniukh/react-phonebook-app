import React from 'react';
import T from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Welcome = ({ isAuth, userName }) => (
  <div className="welcome">
    <div className="welcome__wrap">
      <span className="welcome__emoji" role="img" aria-label="sheep">
        👋
      </span>
      <h1 className="welcome__title">{isAuth ? `Welcome, ${userName}!` : `Welcome!`}</h1>
    </div>
    <span className="welcome__text">This is a simple phonebook app.</span>
    <br />
    <div className="welcome__btn-wrap">
      {isAuth ? (
        <>
          <Link className="welcome__link" to="/contacts">
            <Button variant="contained" color="primary">
              Contacts
            </Button>
          </Link>
          <Link className="welcome__link" to="/cabinet">
            <Button variant="outlined" color="primary">
              Account
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link className="welcome__link" to="/login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
          <Link className="welcome__link" to="/signup">
            <Button variant="outlined" color="primary">
              Sign up
            </Button>
          </Link>
        </>
      )}
    </div>
  </div>
);

Welcome.propTypes = {
  userName: T.string,
  isAuth: T.bool,
};

export default Welcome;
