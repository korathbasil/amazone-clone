import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ContextProvider } from "./ContextProvider";
import { initialState, reducer } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextProvider initialState={initialState} reducer={reducer}>
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
