import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
        API
          <Dashboard />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
