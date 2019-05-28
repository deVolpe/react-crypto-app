import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';
import Logo from '../Logo';
import MainSection from '../../containers/MainSectionContainer';
import Auth from '../Auth';
import Login from '../../containers/LoginContainer';
import Register from '../../containers/RegisterContainer';

import styles from './App.scss';

const App = ({ auth }) => (
  <Router>
    <div className={styles.App}>
      <Header>
        <Logo auth={auth} />
      </Header>
      <Route
        exact
        path="/"
        render={() => (auth.isAuthenticated ? (
          <Redirect to="/main/cards" />
        ) : (
          <Redirect to="/auth/login" />
        ))
          }
      />
      <Route
        path="/main"
        render={({ match }) => <MainSection match={match} />}
      />
      <Route
        path="/auth"
        render={({ match: { path } }) => (
          <Auth>
            <Route
              exact
              path={`${path}/login`}
              render={({ history: { push } }) => (
                <Login push={push} />
              )}
            />
            <Route
              exact
              path={`${path}/register`}
              render={({ history: { push } }) => (
                <Register push={push} />
              )}
            />
          </Auth>
        )}
      />
      <Footer>
        <Logo auth={auth} />
      </Footer>
    </div>
  </Router>
);

App.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

export default App;
