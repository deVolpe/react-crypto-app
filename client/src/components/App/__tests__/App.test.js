import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from '../../../containers/AppContainer';
// import store from '../../../modules/store';

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

describe('App', () => {
  test('should render auth=false', () => {
    const auth = { isAuthenticated: false };
    const wrapper = shallow(
      <Provider store={store}>
        <App auth={auth} />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('[auth=true]', () => {
    const auth = { isAuthenticated: true };
    const wrapper = shallow(
      <Provider store={store}>
        <App auth={auth} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
