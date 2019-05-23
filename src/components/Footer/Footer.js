import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';

const Footer = ({ children }) => (
  <footer className={styles.Footer}>
    <div className={styles.logo}>{children}</div>
  </footer>
);

Footer.defaultProps = { children: null };
Footer.propTypes = { children: PropTypes.element };

export default Footer;
