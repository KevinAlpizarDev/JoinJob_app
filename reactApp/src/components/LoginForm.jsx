import React, { useState, useEffect } from "react";
import axios from "axios"; // Esta línea debe ser exacta

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function LoginForm() {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    client
      .get("/api/user")
      .then(() => setCurrentUser(true))
      .catch(() => setCurrentUser(false));
  }, []);

  const toggleForm = () => {
    setRegistrationToggle(!registrationToggle);
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    client
      .post("/api/register", { email, username, password })
      .then(() => {
        return client.post("/api/login", { email, password });
      })
      .then(() => setCurrentUser(true));
  };

  const submitLogin = (e) => {
    e.preventDefault();
    client
      .post("/api/login", { email, password })
      .then(() => setCurrentUser(true));
  };

  const submitLogout = (e) => {
    e.preventDefault();
    client.post("/api/logout").then(() => setCurrentUser(false));
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <form onSubmit={submitLogout}>
            <button type="submit">Log out</button>
          </form>
          <h2>You're logged in!</h2>
        </div>
      ) : (
        <div>
          <button onClick={toggleForm}>
            {registrationToggle ? "Log in" : "Register"}
          </button>

          {registrationToggle ? (
            <form onSubmit={submitRegistration}>
              <div>
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <form onSubmit={submitLogin}>
              <div>
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginForm;
