import React from "react";

export default function newEventForm() {
  return (
    <div className="dashboard-form-container text-left">
      <h2>New event</h2>
      <form action="" className="flex">
        <div>
          <div>
            <label for="name">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="2024 ai expo"
            />
          </div>
          <div>
            <label for="date">Date</label>
            <input type="date" id="date" name="date" placeholder="2/5/2023" />
          </div>
          <div>
            <label for="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="1500 birr"
            />
          </div>
          <div>
            <label for="aff">affiliates discount</label>
            <input
              type="number"
              name="aff"
              id="aff"
              placeholder="10 birr per one ticket"
            />
          </div>
        </div>
        <div className="div">
          <div>
            <label for="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="25"
              rows="13"
            ></textarea>
          </div>
        </div>
      </form>
      <button type="submit">Add</button>
    </div>
  );
}
