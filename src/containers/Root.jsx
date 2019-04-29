import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from '../AppRouter';
import store from '../modules/store';

const Root = () => {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default Root;