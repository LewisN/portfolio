import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import PageError from '../shared/components/PageError';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route component={PageError} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
