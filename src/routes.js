import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Shelters from "./components/About/About";
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
  </Switch>
);