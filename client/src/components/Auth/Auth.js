import React from 'react';
import PropTypes from 'prop-types';

import styles from './Auth.scss';

const Auth = ({ children }) => (
  <div className={styles.auth}>
    <form className={styles.form}>{children}</form>
  </div>
);

Auth.defaultProps = {
  push: () => {},
  url: '',
};

Auth.propTypes = {
  signIn: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.string).isRequired,
  push: PropTypes.func,
  url: PropTypes.string,
};

Auth.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Auth;
