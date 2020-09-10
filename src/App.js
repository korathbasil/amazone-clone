import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase";
import { useStateContext } from "./ContextProvider";

function App() {
  const [{ user }, dispatch] = useStateContext();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          email: authUser.email,
          displayName: authUser.displayName,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
