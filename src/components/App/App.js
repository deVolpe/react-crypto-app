import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';
import Logo from '../Logo';
import MainSection from '../..//containers/MainSectionContainer';
import Auth from '../Auth';
import Login from '../../containers/LoginContainer';
import Register from '../../containers/RegisterContainer';

import styles from './App.scss';

const App = ({ auth }) => {
  return (
    <Router>
      <div className={styles.App}>
        <Header>
          <Logo />
        </Header>
        <Route
          exact
          path="/"
          render={() => {
            return auth.isAuthenticated ? (
              <Redirect to="/main/cards" />
            ) : (
              <Redirect to="/auth/login" />
            );
          }}
        />
        <Route
          path="/main"
          render={({ match, history }) => (
            <MainSection match={match} history={history} />
          )}
        />
        <Route
          path="/auth"
          render={({ match: { path } }) => {
            return (
              <Auth>
                <Route
                  exact
                  path={`${path}/login`}
                  render={({ match, history }) => (
                    <Login match={match} history={history} />
                  )}
                />
                <Route
                  exact
                  path={`${path}/register`}
                  render={({ match, history }) => (
                    <Register match={match} history={history} />
                  )}
                />
              </Auth>
            );
          }}
        />
        <Footer>
          <Logo />
        </Footer>
      </div>
    </Router>
  );
};

App.propTypes = {
  auth: PropTypes.object.isRequired
};

export default App;
