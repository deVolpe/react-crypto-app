import React from 'react';
import PropTypes from 'prop-types';

import styles from './Panel.scss';

export default function Panel({ children }) {
  return <div className={styles.panel}>{children}</div>;
}

Panel.defaultProps = {
  children: null,
};
Panel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
