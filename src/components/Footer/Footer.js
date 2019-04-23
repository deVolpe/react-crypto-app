import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({ children }) => {


  return (
    <footer className="footer">
      <div className="logo">{children}</div>
    </footer>
  );
};

Footer.defaultProps = { children: null };
Footer.propTypes = { children: PropTypes.element };

export default Footer;