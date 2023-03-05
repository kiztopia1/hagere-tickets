import React from "react";
import Nav from "../components/nav";
import Event from "../components/Event";
import "./BrowseEventsPage.css";
import Events from "../components/Events";
export default function BrowseEventsPage() {
  return (
    <div className="browse-events-page">
      <Nav />
      <Events title={"Events in Online"} />
    </div>
  );
}
