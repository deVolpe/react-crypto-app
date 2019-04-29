import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Register extends Component {
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
    this.props.signUp(candidate);
  };

  componentDidMount() {
    this.setState({ errors: this.props.errors });
  }

  render() {
    console.log(this.props.match)
    return (
      <form class="register-form" onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={this.handleInputChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleInputChange}
          value={password}
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="confirm password"
          onChange={this.handleInputChange}
          value={passwordConfirm}
        />
        <button type="submit">Login</button>
        <figcaption class="message">
          Already registered? <Link to={`shg`}>Sign In</Link>
        </figcaption>
      </form>
    );
  }
}
