import React from 'react';

import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="links-list">
        <li className="link"><a href="#" className="link-1">Main</a></li>
        <li className="link"><a href="#" className="link-2">Top</a></li>
        <li className="link"><a href="#" className="link-3">News</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
