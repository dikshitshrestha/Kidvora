import React from "react";
import BlogHero from "./BlogHero";
import Article from "./Article";
import CourseOverview from "./CourseOverview";
import DiyLearning from "./DiyLearning";

export default function Blog() {
  return (
    <div>
      <BlogHero />
      <Article />
      <CourseOverview />
      <DiyLearning />
    </div>
  );
}
