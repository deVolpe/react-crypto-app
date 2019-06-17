import React, { PureComponent } from 'react';

const withAuth = AuthComponent => class extends PureComponent {
  state = {
    params: {},
  };

  static getDerivedStateFromProps(props) {
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
    const { params } = this.state;
    return (
      <AuthComponent
        {...this.props}
        params={params}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
};

export default withAuth;
