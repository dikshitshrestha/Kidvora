import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "../Blog/HeroImage";

export default function CoursesHero() {
  return (
    <div className="bg-indigo-100 font-poppins flex lg:flex-row flex-col items-center container mx-auto">
      <div className="lg:w-1/2 lg:pl-20">
        <div className="text-[17px] flex lg:justify-start justify-center w-full">
          <h1 className="border-purple-400 border-[1px] py-1 px-4 rounded-full text-purple-800">
            #1 Kids Learning platform
          </h1>
        </div>
        <div className="lg:py-8 py-3">
          <div className="lg:text-6xl text-2xl lg:text-start text-center font-semibold flex flex-col lg:gap-2 gap-1">
            <h1>Engaging Courses for</h1>
            <h1>
              <span className="text-purple-500">Curious Minds</span> to Thrive
            </h1>
          </div>
          <h1 className="lg:pt-7 pt-2 text-zinc-700 lg:text-[18px] 2xl:pr-20 leading-relaxed text-sm lg:text-start text-center">
            Explore a wide range of interactive courses designed to ignite
            creativity, and foster learning.
          </h1>
        </div>
        <div className="text-[18px] flex lg:justify-start justify-center gap-2">
          <div className="xl:text-[18px] text-sm flex justify-center gap-2">
            <NavLink
              to="/courses"
              className="border-[1px] xl:px-11 px-4 xl:py-4 py-3 rounded-full bg-indigo-400 hover:bg-indigo-800 ease-in-out duration-300 text-white"
            >
              Explore Courses
            </NavLink>
            <NavLink
              to="/login"
              className="border-indigo-400 border-[1px] xl:px-11 px-4 xl:py-4 py-3 rounded-full hover:bg-indigo-400 ease-in-out duration-300 text-indigo-400 hover:text-white"
            >
              Sign Up Now
            </NavLink>
          </div>
        </div>
      </div>
      <div className="lg:h-[1150px] flex gap-6 lg:w-1/2 px-10 overflow-hidden">
        <HeroImage />
      </div>
    </div>
  );
}
