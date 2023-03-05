import React from "react";
import "./login.css";
export default function SignUp() {
  return (
    <div className="form-container">
      <form action="" className="form">
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="jeo@gmail.com"
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          className="password"
          placeholder="password"
        />
        <button type="submit">Sign Up</button>
      </form>
      <a href="/login">already have account? login</a>
    </div>
  );
}
