import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "../Blog/HeroImage";

export default function CoursesHero() {
  return (
    <div className="bg-indigo-100 font-poppins flex items-center">
      <div className="w-1/2 pl-20">
        <div className=" text-[17px] flex w-full">
          <h1 className="border-purple-400 border-[1px] py-1 px-4 rounded-full text-purple-800">
            #1 Kids Learning platform
          </h1>
        </div>
        <div className="py-8">
          <div className="text-6xl font-semibold flex flex-col gap-2">
            <h1>Engaging Courses for</h1>
            <h1>
              <span className="text-purple-500">Curious Minds</span> to
            </h1>
            <h1>Thrive</h1>
          </div>
          <h1 className="pt-7 text-zinc-700 text-[18px]">
            Explore a wide range of interactive courses designed to <br />{" "}
            ignite creativity, and foster learning.
          </h1>
        </div>
        <div className="text-[18px] flex gap-2">
          <NavLink
            to="/courses"
            className="border-[1px] px-11 py-3 rounded-full bg-indigo-400 hover:bg-indigo-800 ease-in-out duration-300 text-white"
          >
            Explore Courses
          </NavLink>
          <NavLink
            to="/login"
            className="border-indigo-400 border-[1px] px-11 py-3 rounded-full hover:bg-indigo-400 ease-in-out duration-300 text-indigo-400 hover:text-white"
          >
            Sign Up Now
          </NavLink>
        </div>
      </div>
      <div className="h-[1150px] flex gap-6 w-1/2 px-10 overflow-hidden">
        <HeroImage />
      </div>
    </div>
  );
}
