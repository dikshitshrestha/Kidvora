import React from "react";
import CoursesHero from "./CoursesHero";
import Overview from "./Overview";
import WorkPattern from "./WorkPattern";
import HomeCourses from "../Home/HomeCourses";

export default function Courses() {
  return (
    <div>
      <CoursesHero />
      <Overview />
      <WorkPattern />
      <HomeCourses />
    </div>
  );
}
