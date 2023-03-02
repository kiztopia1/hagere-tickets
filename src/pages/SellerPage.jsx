import React from "react";
import "./SellerPage.css";
import DashboardSide from "../components/dashboardSideNav";
import NoOfSales from "../components/noOfSales";
export default function SellerPage() {
  return (
    <div className="flex">
      <DashboardSide />
      <div className="main">
        <NoOfSales />
      </div>
    </div>
  );
}
