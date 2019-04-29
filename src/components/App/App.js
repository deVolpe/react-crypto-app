import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';
import Logo from '../Logo';

import './App.scss';

const App = ({ children }) => {
  return (
    <div className="App">
      <Header>
        <Logo />
      </Header>
      {children}
      <Footer>
        <Logo />
      </Footer>
    </div>
  );
};

App.defaultProps = {
  children: null
};
App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
