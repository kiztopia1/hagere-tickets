import React from "react";
import Nav from "../components/nav";
import Events from "../components/Events";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Events title={"Events in Online"} />
      <Events title={"Events in Addis "} />
    </div>
  );
}
