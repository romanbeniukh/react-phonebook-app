import React, { Component } from 'react';
import { TextField, Button, Avatar, CircularProgress } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import { validateEmail } from '../../helpers/ValidateEmail';

const initialState = {
  name: '',
  email: '',
  password: '',
  isError: false,
};

class SignupForm extends Component {
  state = {
    ...initialState,
  };

  static propTypes = {
    isLoading: T.bool.isRequired,
    onSignup: T.func.isRequired,
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const { onSignup } = this.props;

    if (name && validateEmail(email) && password.length >= 7) {
      const formData = { name, email, password };
      onSignup(formData);
    } else {
      this.setState({
        isError: true,
      });
    }
  };

  render() {
    const { name, email, password, isError } = this.state;
    const { isLoading } = this.props;

    return (
      <>
        <div className="form__avatar-wrap">
          <Avatar style={{ backgroundColor: '#dc024e' }}>
            <AccountCircle />
          </Avatar>
          <h2 className="title">Sign up</h2>
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
          <TextField
            className="form__element form__element--input"
            id="email"
            label="E-mail"
            variant="outlined"
            name="email"
            size="small"
            disabled={isLoading}
            onChange={this.handleChange}
            value={email}
            error={isError && !validateEmail(email)}
            helperText={isError && !validateEmail(email) ? 'E-mail is not valid' : ''}
            fullWidth
          />
          <TextField
            className="form__element form__element--input"
            id="password"
            label="Password"
            variant="outlined"
            name="password"
            size="small"
            disabled={isLoading}
            onChange={this.handleChange}
            type="password"
            value={password}
            error={isError && password.length < 7}
            helperText={isError && password.length < 7 ? 'Password must be at least 7 characters' : ''}
            fullWidth
          />
          <span className="form__info">
            Already have an account? <Link to="/login">Login</Link>
          </span>
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
              Sign up
            </Button>
            {isLoading && <CircularProgress size={24} className="form__btn-loaded" />}
          </div>
        </form>
      </>
    );
  }
}

export default SignupForm;
