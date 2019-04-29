import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = ({ children, auth }) => {
  const links = auth.isAuthenticate ? (
    <Link className="logout">logout</Link>
  ) : (
      <div className="auth">
        <Link className="auth-link" to="auth/login">signin</Link>
        <Link className="auth-link" to="auth/register">signup</Link>
      </div>
    );

  return (
    <header className="header">
      {children}
      {links}
    </header>
  );
};

Header.defaultProps = { children: null };
Header.propTypes = {
  children: PropTypes.element.isRequired,
  auth: PropTypes.object.isRequired
};

export default Header;
