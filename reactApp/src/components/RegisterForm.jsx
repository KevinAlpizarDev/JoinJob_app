import React, { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function RegisterForm() {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    client
      .get("/api/user")
      .then(() => {
        setCurrentUser(true);
      })
      .catch(() => {
        setCurrentUser(false);
      });
  }, []);

  function update_form_btn() {
    setRegistrationToggle((prev) => !prev);
  }

  function submitRegistration(e) {
    e.preventDefault();
    client
      .post("/api/register", { email, username, password })
      .then(() => {
        return client.post("/api/login", { email, password });
      })
      .then(() => {
        setCurrentUser(true);
      });
  }

  function submitLogin(e) {
    e.preventDefault();
    client.post("/api/login", { email, password }).then(() => {
      setCurrentUser(true);
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post("/api/logout").then(() => {
      setCurrentUser(false);
    });
  }

  if (currentUser) {
    return (
      <div>
        <h2>You're logged in!</h2>
        <form onSubmit={submitLogout}>
          <button type="submit">Log out</button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div>
        <button onClick={update_form_btn}>
          {registrationToggle ? "Log in" : "Register"}
        </button>
        {registrationToggle ? (
          <form onSubmit={submitRegistration}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <form onSubmit={submitLogin}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </>
  );
}

export default RegisterForm;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
