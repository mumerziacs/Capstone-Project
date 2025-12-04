import React, { useState } from "react";

export default function Login({ onLogin, onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      setError("Invalid email or password");
      return;
    }

    onLogin({ username: found.username, email: found.email });
  }

  return (
    <div>
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)} />

        <div style={{ color: "red" }}>{error}</div>

        <button type="submit">Login</button>
        <button type="button" onClick={onSignup}>Sign Up</button>
      </form>
    </div>
  );
}
