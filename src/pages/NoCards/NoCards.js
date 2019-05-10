import React from 'react';
import PropTypes from 'prop-types';

import styles from './NoCards';

const NoCards = ({ error }) => {
  return (
    <div className={styles.pageError}>
      <h2 className={styles.message}>{error}</h2>
    </div>
  );
};

NoCards.defaultProps = {
  error: ''
};

NoCards.propTypes = {
  error: PropTypes.string.isRequired
};

export default NoCards;
