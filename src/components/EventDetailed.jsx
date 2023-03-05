import React from "react";
import "./EventDetailed.css";
export default function EventDetailed() {
  return (
    <div className="event-detail">
      <div className="img-container">
        <img
          src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F454119089%2F10515884495%2F1%2Foriginal.20230224-185958?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=a3384dcca3eb46f4905ef9a69e03f8b9"
          alt=""
        />
      </div>
      <div className="detail-container">
        <div className="details">
          <p className="date">Sun, Mar 5, 2023 7:00 PM EAT</p>
          <h3 className="title">
            Begin your Tai Chi journey: Traditional Movements for Health /
            Rejuvenation
          </h3>

          <p className="organizer">Quality of Life Now</p>
          <div className="main-detail">
            <p>
              {" "}
              Welcome! We are on our 3rd year of lessons (since November 2020).
              Improve your health 30 minutes every Sunday 8am PST (Los Angeles
              CA) 11 am EST (Boston, MA) 4 pm GMT [Please read the release form
              below before registering.] Movement is the key to maintaining
              mental and physical health. This series does seasonal training to
              help you develop a wide range of skills which will enhance both
              your health and your practice. We practices basic Tai Chi / Qigong
              skills as posting, walking, breathing, stretching, energy work,
              bone tapping and hand movements. Even outwardly simple movement
              when practiced correctly promote organ health, lower body strength
              and mental focus.
            </p>
            <p>
              Enjoy learning at home through our online lessons. Welcome! We are
              on our 3rd year of lessons (since November 2020). Improve your
              health 30 minutes every Sunday 8am PST (Los Angeles CA) 11 am EST
              (Boston, MA) 4 pm GMT [Please read the release form below before
              registering.] Movement is the key to maintaining mental and
              physical health. This series does seasonal training to help you
              develop a wide range of skills which will enhance both your health
              and your practice. We practices basic Tai Chi / Qigong skills as
              posting, walking, breathing, stretching, energy work, bone tapping
              and hand movements. Even outwardly simple movement when practiced
              correctly promote organ health, lower body strength and mental
              focus. Enjoy learning at home through our online lessons. Welcome!
              We are on our 3rd year of lessons (since November 2020). Improve
              your health 30 minutes every Sunday 8am PST (Los Angeles CA) 11 am
              EST (Boston, MA) 4 pm GMT [Please read the release form below
              before registering.]
            </p>
            <p>
              Movement is the key to maintaining mental and physical health.
              This series does seasonal training to help you develop a wide
              range of skills which will enhance both your health and your
              practice. We practices basic Tai Chi / Qigong skills as posting,
              walking, breathing, stretching, energy work, bone tapping and hand
              movements. Even outwardly simple movement when practiced correctly
              promote organ health, lower body strength and mental focus. Enjoy
              learning at home through our online lessons.
            </p>
          </div>
        </div>
        <div className="side">
          <p className="notice">Ticket sales end soon</p>
          <hr />
          <p className="price">Free</p>
          <p className="call-to-action">Register</p>
        </div>
      </div>
    </div>
  );
}
