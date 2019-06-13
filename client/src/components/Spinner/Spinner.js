import React from 'react';

import styles from './Spinner.scss';

const Spinner = () => (
  <div className={styles.loading}>
    <div className={styles.spinner}>
      <div />
    </div>
  </div>
);

export default Spinner;
