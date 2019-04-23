import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="logo">{children}</div>
    </header>
    );
};

Header.defaultProps = { children: null };
Header.propTypes = { children: PropTypes.element };

export default Header;
