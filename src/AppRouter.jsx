import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './containers/AppContainer';
import MainSection from './components/MainSection';


const AppRoutes = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/main" component={MainSection}/>
          <Route exact path="/auth" component={Auth}/>
        </Switch>
      </App>
    </Router>
  );
};


export default AppRoutes;