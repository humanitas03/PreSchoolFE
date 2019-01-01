
import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import LoginFormContainer from './container/LoginFormContainer'
import MainViewContainer from './container/MainViewContainer'
import PageHeader from './shared/PageHeader';
const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Redirect exact from="/" to="/front/login"/>
      <Route exact path="/front/login" component={LoginFormContainer} />
      <Route path='/front/user/:userId?' component={MainViewContainer} />
      <Route/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
