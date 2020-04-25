import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const MenuPage = () => (
  <div>
    <h1> MENU PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={MenuPage} />
      </Switch>
    </div>
  );
}

export default App;
