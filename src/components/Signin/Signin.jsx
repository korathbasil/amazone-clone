import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import Logo from "./amazon-logo-color.png";

function Signin() {
  return (
    <div className="signin">
      <img src={Logo} alt="" className="signin__logo" />
      <div className="signin__contents">
        <h1>Login</h1>
        <form>
          {/* <label htmlFor="name">
            Name
            <input type="text" name="name" required />
          </label> */}
          <label className="signin__formItem" htmlFor="email">
            E-mail
            <input type="email" name="email" required />
          </label>
          <label className="signin__formItem" htmlFor="password">
            Password
            <input type="password" name="password" required />
          </label>
          <button className="signin__formButton" type="submit">
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
