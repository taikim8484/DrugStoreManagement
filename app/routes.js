/* eslint flowtype-errors/show-errors: 0 */
import React from "react";
import { Switch, Route } from "react-router";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import CounterPage from "./containers/CounterPage";
import BillPage from "./containers/BillPage";
import Header from "./components/Header";
export default () => (
  <App>
    <Switch>
      <Route path="/" component={Header} />
    </Switch>
  </App>
);
