import React, { useState } from "react";
import Home from "./Navbar";

function LoginUser({ setuser }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setuser(user));
      }
    });
  }

  return (
    
    <div>
      <Home/>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <h1>UserLogin</h1>
        <label htmlFor="username" className="form-label">username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          className="form-control"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginUser;