import React, { useState } from 'react';
import { Toolbar, CssBaseline, AppBar, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { NavLink, Link } from 'react-router-dom';
import T from 'prop-types';
import HideOnScroll from '../helpers/HideOnScroll';

const Header = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className="header">
            <Typography variant="h6">Phonebook</Typography>
            <div className="header__link-wrap">
              <NavLink className="header__link" to="/home">
                Home
              </NavLink>
              <NavLink className="header__link" to="/contacts">
                Contacts
              </NavLink>
              {props.isAuth ? (
                <div>
                  <Button
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    variant="outlined"
                    endIcon={<AccountCircle />}
                    color="inherit"
                  >
                    Welcome, {props.userName}
                  </Button>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <Link
                      to="/cabinet"
                      style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none', display: 'block' }}
                    >
                      <MenuItem onClick={handleClose}>My cabinet</MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        props.logout();
                      }}
                    >
                      LOGOUT
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <NavLink to="/login" className="header__link">
                  <Button color="inherit" variant="outlined">
                    Login
                  </Button>
                </NavLink>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

Header.propTypes = {
  isAuth: T.bool.isRequired,
  userName: T.string,
  logout: T.func,
  token: T.string,
};

export default Header;
