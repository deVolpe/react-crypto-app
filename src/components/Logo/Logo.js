import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './Logo.scss';

const cx = classnames.bind(styles);

const Logo = ({ auth }) => (
  <h1 className={styles.logo}>
    <Link to="/main/cards" className={cx({ disabled: !auth.isAuthenticated })}>
      cryptoapp
    </Link>
  </h1>
);

Logo.propTypes = {
  auth: PropTypes.object.isRequired
};

export default Logo;
