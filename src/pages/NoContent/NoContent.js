import React from 'react';
import PropTypes from 'prop-types';

import styles from './NoContent.scss';

const NoContent = ({ message }) => (
  <div className={styles.noContent}>
    <h2 className={styles.message}>{message}</h2>
  </div>
);

NoContent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoContent;
