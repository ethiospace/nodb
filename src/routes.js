import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
  </Switch>
);
