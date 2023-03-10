import React, { useRef } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  const navButtonRef = useRef();
  const navClickHandler = () => {
    console.log(navButtonRef.current);
    navButtonRef.current.classList.toggle("active");
  };
  return (
    <div className="nav">
      <Link to="/">
        <img src="logo-dark.svg" alt="Hagere tickets" />
      </Link>
      <div className="list-container" ref={navButtonRef}>
        <FontAwesomeIcon
          icon={faNavicon}
          className="icon"
          onClick={() => navClickHandler()}
        />
        <div className="list">
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/browse-events">Events</Link>
          <Link to="/seller">Create Event</Link>
        </div>
      </div>
    </div>
  );
}
