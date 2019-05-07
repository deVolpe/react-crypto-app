import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.scss';

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <ul className={styles.list}>
        <li>
          <Link to="/main/cards" className={styles.link}>
            Main
          </Link>
        </li>
        <li>
          <Link to="" className={styles.link}>
            Top
          </Link>
        </li>
        <li>
          <Link to="" className={styles.link}>
            News
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
