import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
// <-- import styles to be used
import React from "react";
import {
  faCalendarDay,
  faChartLine,
  faDesktop,
  faHandshake,
  faHandshakeAlt,
  faHandshakeAltSlash,
  faSignOut,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays, faUser } from "@fortawesome/free-regular-svg-icons";
import "./dashboardSideNav.css";
export default function dashboardSideNav() {
  return (
    <div className="dashboard-side-nav">
      <div className="header">
        <img src="./logo.svg" alt="Hagere tickets" />
        <p className="name">Joe</p>
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faDesktop} />
          <a href="/">Dashboard</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <a href="/">My Profile</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDays} />
          <a href="/">Events</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDays} />
          <a href="/newEvent">Add New Event</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faChartLine} />
          <a href="/">Analytics</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faHandshakeAlt} />

          <a href="/">Affiliate</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faTicket} />

          <a href="/users">Coupons</a>
        </li>
        <li className="sign-out">
          <FontAwesomeIcon icon={faSignOut} />

          <a href="/users">Sign out</a>
        </li>
      </ul>
    </div>
  );
}
