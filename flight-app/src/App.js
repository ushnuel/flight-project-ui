import React, { Component } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import FlightSearch from './Components/flightSearch';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={FlightSearch} />
        </Switch>
      </Router>
    );
  }
}
export default App;
