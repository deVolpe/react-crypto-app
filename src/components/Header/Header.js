import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

const Header = ({ children, auth }) => {
  const links = auth.isAuthenticate ? (
    <Link className={styles.logout}>logout</Link>
  ) : (
      <div className={styles.auth}>
        <Link className={styles.link} to="/auth/login">signin</Link>
        <Link className={styles.link} to="/auth/register">signup</Link>
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
  auth: PropTypes.object.isRequired
};

export default Header;
