import React, { Component } from 'react';

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
    }
  }
}
