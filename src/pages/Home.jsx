import React from "react";
import Nav from "../components/nav";
import Events from "../components/Events";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Hero />
      <Events title={"Events in Online"} />
      <Events title={"Events in Addis "} />
    </div>
  );
}
