import React from "react";
import "./SellerPage.css";
import DashboardSide from "../components/dashboardSideNav";
import NoOfSales from "../components/noOfSales";
import Events from "../components/Events";
export default function SellerPage() {
  return (
    <div className="seller-page flex">
      <DashboardSide />
      <div className="main">
        <NoOfSales />
        <Events />
      </div>
    </div>
  );
}
