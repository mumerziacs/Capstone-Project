import React, { useState } from "react";

export default function Signup({ onSignup, onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.email === email)) {
      setError("Email already exists");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    onSignup({ username, email });
  }

  return (
    <div>
      <h3>Sign Up</h3>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)} />

        <div style={{ color: "red" }}>{error}</div>

        <button type="submit">Sign Up</button>
        <button type="button" onClick={onLogin}>Login</button>
      </form>
    </div>
  );
}
