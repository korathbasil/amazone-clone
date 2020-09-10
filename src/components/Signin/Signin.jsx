import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signin.css";
import Logo from "./amazon-logo-color.png";
import { useStateContext } from "../../ContextProvider";
import { auth } from "../../firebase";

function Signin() {
  const [{ user }, dispatch] = useStateContext();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebaseSignin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.table(auth);
          setEmail("");
          setPassword("");
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="signin">
      <Link to="/">
        <img src={Logo} alt="" className="signin__logo" />
      </Link>
      <div className="signin__contents">
        <h1>Login</h1>
        <form>
          {/* <label htmlFor="name">
            Name
            <input type="text" name="name" required />
          </label> */}
          <label className="signin__formItem" htmlFor="email">
            E-mail
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </label>
          <label className="signin__formItem" htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </label>
          <button
            onClick={firebaseSignin}
            className="signin__formButton"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <p>
          By continiuing, you are agreeing to Amazon's Conditions of Use and
          Policy Notice
        </p>
      </div>
      <p className="signin__newToAmazone">New to Amazon?</p>
      <Link to="/signup">
        <button className="signin__signupPageButton">
          Create your Amazon account
        </button>
      </Link>
    </div>
  );
}

export default Signin;
