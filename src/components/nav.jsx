import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav">
      <img src="logo.svg" alt="Hagere tickets" />
      <div className="list">
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/seller">seller</Link>
      </div>
    </div>
  );
}
