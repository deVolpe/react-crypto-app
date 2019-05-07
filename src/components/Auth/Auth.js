import React from 'react';
import PropTypes from 'prop-types';

import styles from './Auth.scss';

const Auth = ({ children }) => {
  return (
    <div className={styles.auth}>
      <div className={styles.form}>{children}</div>
    </div>
  );
};

Auth.defaultProps = {
  children: null
};
Auth.propTypes = {
  children: PropTypes.array.isRequired
};

export default Auth;
