import React, { useState } from 'react'

function SignupUser({ setadmin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, passwordConfirmation }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setadmin(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <h1>User Signup</h1>
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
         <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          id="email"
          className="form-control"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <label htmlFor="password" className="form-label">Password  Confirmation</label>
        <input
          type="password"
          id="passwordConfirmation"
          className="form-control"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
}

export default SignupUser;