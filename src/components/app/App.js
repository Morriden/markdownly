import React from 'react';
import View from '../markdown/view';
import Landing from '../info/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/markdown" component={View} />
        <Route exact path="/markdown/:id" component={View} />
      </Switch>
    </Router>
  );
}
