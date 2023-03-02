import React from "react";
import DashboardSideNav from "../components/dashboardSideNav";
import NewEventForm from "../components/newEventForm";
export default function AddEventPage() {
  return (
    <div className="add-event-page dash-page flex">
      <DashboardSideNav />
      <div className="main">
        <NewEventForm />
      </div>
    </div>
  );
}
