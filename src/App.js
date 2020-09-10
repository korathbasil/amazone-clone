import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Switch>
        <Route path="/signup" component={Signup} />

        <Route path="/signin" component={Signin} />

        <Route path="/checkout" component={Checkout} />

        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
