import React from "react";
import Hero from "./Hero";
import Landing from "./Landing";
import ChooseUs from "./ChooseUs";
import HomeCourses from "./HomeCourses";
import UpcomingEvent from "./UpcomingEvent";
import Subscription from "./Subscription";

export default function Home() {
  return (
    <div>
      <Hero />
      <Landing />
      <ChooseUs />
      <HomeCourses />
      <UpcomingEvent />
      <Subscription />
    </div>
  );
}
