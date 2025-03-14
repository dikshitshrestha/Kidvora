import React from "react";
import AcitivitesHero from "./ActivitiesHero";
import Interactive from "./Interactive";
import Schedule from "./Schedule";
import Galleries from "./Galleries";

export default function Activities() {
  return (
    <div>
      <AcitivitesHero />
      <Interactive />
      <Schedule />
      <Galleries />
    </div>
  );
}
