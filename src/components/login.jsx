import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="form-container">
      <form action="" className="form">
        <label for="username">Username:</label>
        <input
          type="text"
          name="input"
          id="username"
          placeholder="jeo@gmail.com"
        />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          className="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
      <a href="/signUp">create new account </a>
    </div>
  );
}
