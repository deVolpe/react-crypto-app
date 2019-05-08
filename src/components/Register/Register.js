import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Register.scss';
export default class Register extends PureComponent {
  static defaultProps = {
    push: () => {},
    match: null
  };
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    errors: PropTypes.object,
    push: PropTypes.func,
    match: PropTypes.object
  };
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    errors: {}
  };

  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const candidate = {
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    this.props.signUp(candidate, this.props.push);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  render() {
    const { email, password, passwordConfirm, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChangeInput}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleChangeInput}
          className={styles.input}
        />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="confirm password"
          onChange={this.handleChangeInput}
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
