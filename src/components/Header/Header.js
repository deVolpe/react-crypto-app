import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

const Header = ({ children, auth, logout }) => {
  const onLogout = () => {
    logout();
  };

  const links = auth.isAuthenticated ? (
    <Link to="/auth/login" className={styles.logout} onClick={onLogout}>
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
  );

  return (
    <header className={styles.Header}>
      {children}
      {links}
    </header>
  );
};

Header.defaultProps = { children: null };
Header.propTypes = {
  children: PropTypes.element.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func
};

export default Header;
