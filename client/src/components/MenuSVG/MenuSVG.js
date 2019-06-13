import React from 'react';
import styles from './MenuSVG.scss';

const MenuSVG = () => (
  <svg height="28" width="32">
    <line className={styles.line} x1="1" y1="5" x2="31" y2="5" />
    <line className={styles.line} x1="1" y1="15" x2="31" y2="15" />
    <line className={styles.line} x1="1" y1="25" x2="31" y2="25" />
  </svg>
);

export default MenuSVG;
