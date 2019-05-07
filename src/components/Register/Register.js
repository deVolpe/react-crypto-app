import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Register.scss';
export default class Register extends PureComponent {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    errors: PropTypes.object
  };
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    errors: {}
  };

  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.defaultValue
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const candidate = {
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    this.props.signUp(candidate);
  };

  componentDidMount() {
    this.setState({ errors: this.props.errors });
  }

  render() {
    const { email, password, passwordConfirm, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {errors.email}
        <input
          type="email"
          placeholder="email"
          onChange={this.handleInputChange}
          defaultValue={email}
          className={styles.input}
        />
        {errors.password}
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleInputChange}
          defaultValue={password}
          className={styles.input}
        />
        {errors.passwordConfirm}
        <input
          type="password"
          name="confirm-password"
          placeholder="confirm password"
          onChange={this.handleInputChange}
          defaultValue={passwordConfirm}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
        <figcaption className={styles.message}>
          Already registered?{' '}
          <Link to="/auth/login" className={styles.link}>
            Sign In
          </Link>
        </figcaption>
      </form>
    );
  }
}
