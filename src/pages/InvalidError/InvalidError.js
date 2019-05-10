import React from 'react';
import PropTypes from 'prop-types';

import styles from './InvalidError.scss';

const InvalidError = ({ error }) => {
  const onRenderError = error => {
    return error ? <span className={styles.invalid}>{error}</span> : null;
  };

  return onRenderError(error);
};

InvalidError.defaultProps = {
  error: ''
};

InvalidError.propTypes = {
  error: PropTypes.string
};


export default InvalidError;