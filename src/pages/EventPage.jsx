import React from "react";
import Event from "../components/EventDetailed";
import Nav from "../components/nav";

export default function EventPage() {
  return (
    <div className="event-detail-page">
      <Nav />

      <Event />
    </div>
  );
}
