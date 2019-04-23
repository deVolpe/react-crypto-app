import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';
import Logo from '../Logo';
import MainSection from '../MainSection'

import store from '../../modules/store';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header>
            <Logo />
          </Header>
          <Route exact path="/" component={MainSection} />
          <Footer>
            <Logo />
          </Footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
