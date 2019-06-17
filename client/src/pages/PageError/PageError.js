import React from 'react';

import styles from './PageError.scss';

const PageError = () => (
  <div className={styles.page}>
    <h2 className={styles.message}>Page not found</h2>
  </div>
);

export default PageError;
