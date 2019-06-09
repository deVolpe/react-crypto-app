import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Register.scss';
import InvalidError from '../../pages/InvalidError';

export default class Register extends PureComponent {
  static defaultProps = {
    push: () => {},
    url: '',
  };

  static propTypes = {
    signUp: PropTypes.func.isRequired,
    error: PropTypes.objectOf(PropTypes.string).isRequired,
    push: PropTypes.func,
    url: PropTypes.string,
  };

  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    error: {},
  };

  static getDerivedStateFromProps(props) {
    return {
      error: props.error,
    };
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const candidate = {
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
    };
    this.props.signUp(candidate, this.props.push);
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <InvalidError error={error.email} />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChangeInput}
          className={styles.input}
        />
        <InvalidError error={error.password} />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleChangeInput}
          className={styles.input}
        />
        <InvalidError error={error.passwordConfirm} />
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
          <Link to={`${this.props.url}/login`} className={styles.link}>
            Sign In
          </Link>
        </figcaption>
      </form>
    );
  }
}
