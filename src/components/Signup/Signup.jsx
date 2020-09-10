import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";
import Logo from "../Signin/amazon-logo-color.png";
import { auth } from "../../firebase";

function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebaseSignup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        if (user) {
          user.user
            .updateProfile({
              displayName: name,
            })
            .then((user) => console.log(user));
          setName("");
          setEmail("");
          setPassword("");
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="signup">
      <Link to="/">
        <img src={Logo} alt="" className="signup__logo" />
      </Link>
      <div className="signup__contents">
        <h1>Create Account</h1>
        <form>
          <label className="signup__formItem" htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label className="signup__formItem" htmlFor="email">
            E-mail
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </label>
          <label className="signup__formItem" htmlFor="password">
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
            onClick={firebaseSignup}
            className="signup__formButton"
            type="submit"
          >
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
