import React from 'react';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import App from './AppContainer';
import store from '../modules/store';
import { logout, setCurrentUser } from '../modules/actions/auth';
import setAuthToken from '../utils/setAuthToken';

if (localStorage.jwtToken) {
  store.dispatch(setCurrentUser(localStorage.jwtToken));
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logout());
  }
}

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
