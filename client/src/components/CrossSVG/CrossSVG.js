import React from 'react';
import styles from './CrossSVG.scss';

const CrossSVG = () => (
  <svg width="22" height="22">
    <polyline className={styles.polyline} points="1 1, 11 11, 21 1" />
    <polyline className={styles.polyline} points="1 21, 11 11, 21 21" />
  </svg>
);

export default CrossSVG;
