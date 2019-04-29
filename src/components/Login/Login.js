import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
    const { email, password } = this.state;

    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
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
        <button type="submit">Login</button>
        <figcaption className="message">
          Not registered? <a href="#">Create an account</a>
        </figcaption>
      </form>
    );
  }
}
