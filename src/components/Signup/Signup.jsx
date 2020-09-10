import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Logo from "../Signin/amazon-logo-color.png";

function Signup() {
  return (
    <div className="signup">
      <img src={Logo} alt="" className="signup__logo" />
      <div className="signup__contents">
        <h1>Create Account</h1>
        <form>
          <label className="signup__formItem" htmlFor="name">
            Name
            <input type="text" name="name" required />
          </label>
          <label className="signup__formItem" htmlFor="email">
            E-mail
            <input type="email" name="email" required />
          </label>
          <label className="signup__formItem" htmlFor="password">
            Password
            <input type="password" name="password" required />
          </label>
          <button className="signup__formButton" type="submit">
            Continue
          </button>
        </form>
        <p>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
