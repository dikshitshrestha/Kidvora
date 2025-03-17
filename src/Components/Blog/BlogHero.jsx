import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "./HeroImage";

export default function BlogHero() {
  return (
    <div className="bg-indigo-100 font-poppins flex lg:flex-row flex-col items-center container mx-auto">
      <div className="lg:w-1/2 lg:pl-20">
        <div className="text-[17px] flex lg:justify-start justify-center w-full">
          <h1 className="border-red-400 border-[1px] py-1 px-4 rounded-full text-red-500">
            #1 Kids Learning platform
          </h1>
        </div>
        <div className="lg:py-8 py-3">
          <h1 className="lg:text-6xl text-2xl lg:text-start text-center font-semibold flex flex-col lg:gap-2 gap-1">
            <h1>Inspiring Insights,</h1>
            <h1>
              <span className="text-red-500">Tips, and Stories</span> for
            </h1>
            <h1>Parents</h1>
          </h1>
          <h1 className="lg:pt-7 pt-2 text-zinc-700 lg:text-[18px] 2xl:pr-32 leading-relaxed text-sm lg:text-start text-center">
            Discover expert advice, creative ideas, and inspiring stories to
            support your child’s
          </h1>
        </div>
        <div className="lg:text-[18px] text-sm flex lg:justify-start justify-center gap-2">
          <NavLink
            to="/courses"
            className="border-[1px] xl:px-11 px-4 xl:py-4 py-3 rounded-full bg-red-500 hover:bg-red-800 ease-in-out duration-300 text-white"
          >
            Explore Courses
          </NavLink>
          <NavLink
            to="/login"
            className="border-black border-[1px] xl:px-11 px-4 xl:py-4 py-3 rounded-full hover:bg-indigo-400 ease-in-out duration-300 text-black hover:border-indigo-400 hover:text-white"
          >
            Sign Up Now
          </NavLink>
        </div>
      </div>
      <div className="lg:h-[1150px] flex gap-6 lg:w-1/2 lg:px-10 overflow-hidden">
        <HeroImage />
      </div>
    </div>
  );
}
