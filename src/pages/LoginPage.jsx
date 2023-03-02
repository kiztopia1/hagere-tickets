import React from "react";
import Nav from "../components/nav";
import Login from "../components/login";
import SignUp from "../components/signup";
export default function LoginPage() {
  return (
    <div className="login-page">
      <Nav></Nav>
      <Login></Login>
      <SignUp />
    </div>
  );
}
