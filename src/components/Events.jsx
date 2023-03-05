import React from "react";
import "./Events.css";
import Event from "./Event";
export default function Events({ title }) {
  return (
    <div className="events-container">
      <h3 className="header">{title}</h3>
      <div className="events">
        <Event imgLink="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F454119089%2F10515884495%2F1%2Foriginal.20230224-185958?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=a3384dcca3eb46f4905ef9a69e03f8b9" />
        <a href="./event" className="event">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F396738279%2F166312578381%2F1%2Foriginal.20221120-053822?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=47c89ba1e76ec57b8f22f8e913aeb5dd"
            alt=""
          />
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
        <a href="./event" className="event">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F192974469%2F124429251107%2F1%2Foriginal.20211129-000629?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C83%2C794%2C397&s=6a7d05d396a86a7d5f27aca6cff06222"
            alt=""
          />
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
        <a href="./event" className="event">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F130816473%2F528546638717%2F1%2Foriginal.20210331-155731?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=300%2C0%2C1200%2C600&s=380061e11f346014e7be70ac271c0a15"
            alt=""
          />
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
        <Event imgLink="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F454119089%2F10515884495%2F1%2Foriginal.20230224-185958?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=a3384dcca3eb46f4905ef9a69e03f8b9" />
        <a href="./event" className="event">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F396738279%2F166312578381%2F1%2Foriginal.20221120-053822?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=47c89ba1e76ec57b8f22f8e913aeb5dd"
            alt=""
          />
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
        <a href="./event" className="event">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F192974469%2F124429251107%2F1%2Foriginal.20211129-000629?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C83%2C794%2C397&s=6a7d05d396a86a7d5f27aca6cff06222"
            alt=""
          />
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
        <a href="./event" className="event">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F130816473%2F528546638717%2F1%2Foriginal.20210331-155731?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=300%2C0%2C1200%2C600&s=380061e11f346014e7be70ac271c0a15"
            alt=""
          />
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
      </div>
    </div>
  );
}
