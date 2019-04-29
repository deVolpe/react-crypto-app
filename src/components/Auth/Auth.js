import React from 'react';
import PropTypes from 'prop-types';

const Auth = ({ children }) => {
  return (
    <div className="login-page">
      <div className="form">{children}</div>
    </div>
  );
};

Auth.defaultProps = {
  children: null
};
Auth.propTypes = {
  children: PropTypes.element.isRequired
};

export default Auth;
