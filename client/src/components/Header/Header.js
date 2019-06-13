import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

const Header = ({ children, auth, logout }) => (
  <header className={styles.Header}>
    <div className={styles.container}>
      {children}
      {auth.isAuthenticated ? (
        <Link to="/auth/login" className={styles.logout} onClick={logout}>
          logout
        </Link>
      ) : (
        <div className={styles.auth}>
          <Link className={styles.link} to="/auth/login">
            signin
          </Link>
          <Link className={styles.link} to="/auth/register">
            signup
          </Link>
        </div>
      )}
    </div>
  </header>
);

Header.defaultProps = { children: null };
Header.propTypes = {
  children: PropTypes.element,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
