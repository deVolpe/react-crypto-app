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
  }

  handleSubmit = e =>{
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
  }

  render() {

    const { email, password } = this.state;

    return (
      <div className="form">
        <form className="auth-form" onSubmit={this.hadleSubmit}>
          <input type="email" placeholder="email" onChange={this.handleInputChange} value={email} />
          <input type="password" name="password" placeholder="password" onChange={this.handleInputChange} value={password}/>
          <button type="submit">Login</button>
          <figcaption className="message">Not registered? <a href="#">Create an account</a></figcaption>
        </form>
      </div>
    )
  }
}
