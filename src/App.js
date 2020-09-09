import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
