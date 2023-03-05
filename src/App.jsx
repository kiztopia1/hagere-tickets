import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SellerPage from "./pages/SellerPage";
import AddEventPage from "./pages/AddEventPage";
import EventPage from "./pages/EventPage";
import BrowseEventsPage from "./pages/BrowseEventsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="seller" element={<SellerPage />} />
        <Route path="newEvent" element={<AddEventPage />} />
        <Route path="event" element={<EventPage />} />
        <Route path="browse-events" element={<BrowseEventsPage />} />
      </Routes>
    </div>
  );
}

export default App;
