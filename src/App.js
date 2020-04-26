import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import OrderPage from "./pages/order/order.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} />
      </Switch>
    </div>
  );
}

export default App;
