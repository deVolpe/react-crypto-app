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
import { ServiceContextProvider } from './ServiceContext';
import CryptoCompareService from '../../services/cryptocompare-service';

import styles from './App.scss';

const service = new CryptoCompareService();

const App = ({ auth }) => (
  <Router>
    <ServiceContextProvider value={service}>
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
          render={({ match: { path, url } }) => (
            <Auth>
              <Route
                exact
                path={`${path}/login`}
                render={({ history: { push } }) => (
                  <Login push={push} url={url} />
                )}
              />
              <Route
                exact
                path={`${path}/register`}
                render={({ history: { push } }) => (
                  <Register push={push} url={url} />
                )}
              />
            </Auth>
          )}
        />
        <Footer>
          <Logo auth={auth} />
        </Footer>
      </div>
    </ServiceContextProvider>
  </Router>
);

App.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

export default App;
