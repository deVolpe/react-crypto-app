import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import InvalidError from '../../pages/InvalidError';

import styles from './Login.scss';

export default class Login extends PureComponent {
  static defaultProps = {
    push: () => {},
    url: '',
  };

  static propTypes = {
    signIn: PropTypes.func.isRequired,
    error: PropTypes.objectOf(PropTypes.string).isRequired,
    push: PropTypes.func,
    url: PropTypes.string,
  };

  state = {
    email: '',
    password: '',
    error: {},
  };

  static getDerivedStateFromProps(props, state) {
    return {
      error: props.error,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signIn(user, this.props.push);
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
          onChange={this.handleInputChange}
          className={styles.input}
        />
        <InvalidError error={error.password} />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={this.handleInputChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login{' '}
        </button>
        <figcaption className={styles.message}>
          Not registered?{' '}
          <Link to={`${this.props.url}/register`} className={styles.link}>
            Create an account
          </Link>
        </figcaption>
      </form>
    );
  }
}
