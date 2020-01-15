import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Proyects from './components/proyects/Proyects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/new-account" component={NewAccount} />
        <Route exact path="/proyects" component={Proyects} />
      </Switch>
    </Router>
  );
}

export default App;
