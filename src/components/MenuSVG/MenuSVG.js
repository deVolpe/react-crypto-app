import React from 'react';
import styles from './MenuSVG.scss';

const MenuSVG = () => (
  <svg height="40" width="50">
    <line className={styles.line} x1="10" y1="10" x2="40" y2="10" />
    <line className={styles.line} x1="10" y1="20" x2="40" y2="20" />
    <line className={styles.line} x1="10" y1="30" x2="40" y2="30" />
  </svg>
);

export default MenuSVG;
