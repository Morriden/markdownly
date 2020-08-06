import React from 'react';
import View from '../markdown/view';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={View} />
        <Route exact path="/:id" component={View} />
      </Switch>
    </Router>
  );
}
