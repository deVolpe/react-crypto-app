import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';

ReactDOM.render(<Root />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = App;
    ReactDOM.render(<NextApp />, 'root');
  });
}
