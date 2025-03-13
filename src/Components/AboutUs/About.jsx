import React from "react";
import AboutHeader from "./AboutHeader";
import Landing from "../Home/Landing";
import Journey from "./Journey";
import Mission from "./Mission";
import Founder from "./Founder";

export default function About() {
  return (
    <div>
      <AboutHeader />
      <Mission />
      <Landing />
      <Journey />
      <Founder />
    </div>
  );
}
