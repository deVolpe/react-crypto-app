import React from 'react';
import PropTypes from 'prop-types';

import styles from './Auth.scss';

const Auth = ({ children }) => (
  <div className={styles.auth}>
    <div className={styles.form}>{children}</div>
  </div>
);

Auth.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Auth;
