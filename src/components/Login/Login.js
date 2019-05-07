import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Login.scss';
export default class Login extends PureComponent {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    errors: PropTypes.object
  };
  state = {
    email: '',
    password: '',
    errors: {}
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.defaultValue
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signIn(user);
  };

  componentDidMount() {
    this.setState({ errors: this.props.errors });
  }

  render() {
    const { email, password, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={this.handleInputChange}
          defaultValue={email}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="password"
          onChange={this.handleInputChange}
          defaultValue={password}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
        <figcaption className={styles.message}>
          Not registered?{' '}
          <Link to="/auth/register" className={styles.link}>
            Create an account
          </Link>
        </figcaption>
      </form>
    );
  }
}
