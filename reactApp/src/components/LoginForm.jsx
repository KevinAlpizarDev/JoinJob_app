// import React, { useState } from "react";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
//     console.log("Correo:", email);
//     console.log("Contraseña:", password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Correo Electrónico:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Contraseña:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Iniciar aquí </button>
//     </form>
//   );
// }

// export default LoginForm;

import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const updateFormBtn = () => {
    setRegistrationToggle(!registrationToggle);
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    client.post("/api/register", { email, username, password }).then(() => {
      client
        .post("/api/login", { email, password })
        .then(() => setCurrentUser(true));
    });
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

  if (currentUser) {
    return (
      <div>
        <header>
          <h1>Authentication App</h1>
          <button onClick={submitLogout}>Log out</button>
        </header>
        <div>
          <h2>You're logged in!</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header>
        <h1>Authentication App</h1>
        <button onClick={updateFormBtn}>
          {registrationToggle ? "Log in" : "Register"}
        </button>
      </header>
      <div>
        <form onSubmit={registrationToggle ? submitRegistration : submitLogin}>
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
          {registrationToggle && (
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
          )}
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
      </div>
    </div>
  );
}

export default LoginForm;
