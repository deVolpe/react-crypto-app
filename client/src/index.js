import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';

ReactDOM.render(<Root />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextApp = Root;
    ReactDOM.render(<NextApp />, 'root');
  });
}
