import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.scss';

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <Link to="/main/cards">cryptoApp</Link>
    </h1>
  );
};

export default Logo;
