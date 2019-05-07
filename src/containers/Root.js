import React from 'react';
import { Provider } from 'react-redux';

import App from './AppContainer';
import store from '../modules/store';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
