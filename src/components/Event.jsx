import React from "react";
import "./Event.css";
export default function Event({ imgLink }) {
  return (
    <a href="./event" className="event">
      <img src={imgLink} alt="" />
      <div className="details">
        <h3 className="title">
          Begin your Tai Chi journey: Traditional Movements for Health /
          Rejuvenation
        </h3>
        <p className="date">Sun, Mar 5, 2023 7:00 PM EAT</p>
        <p className="price">Starts at $10.00</p>
        <p className="organizer">Quality of Life Now</p>
      </div>
    </a>
  );
}
