import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.scss';

const NavBar = () => (
  <div className={styles.NavBar}>
    <ul className={styles.list}>
      <li>
        <Link to="/main/cards" className={styles.link}>

          Main
        </Link>
      </li>
      <li>
        <Link to="/main/cards" className={styles.link}>

          Top
        </Link>
      </li>
      <li>
        <Link to="/main" className={styles.link}>

          News
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
