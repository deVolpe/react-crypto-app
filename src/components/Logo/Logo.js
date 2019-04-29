import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <h1 className="logo">
      <Link to="/main/cards">CryptoApp</Link>
    </h1>
  );
};

export default Logo;
