import React from 'react';

import styles from './Label.scss';

const Label = () => (
  <div className={styles.label}>
    <h1 className={styles.bold}>
      Add card
      <span className={styles.normal}>you want to track</span>
    </h1>
  </div>
);

export default Label;
