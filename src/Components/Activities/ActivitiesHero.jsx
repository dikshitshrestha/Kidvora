import React from "react";
import { NavLink } from "react-router-dom";
import kid1 from "../../assets/kid8.jpg";
import kid2 from "../../assets/kid9.jpg";
import kid3 from "../../assets/kid10.jpg";

export default function AcitivitesHero() {
  return (
    <div className="bg-indigo-100 font-poppins container mx-auto">
      <div className=" text-[17px] flex justify-center w-full">
        <h1 className="border-rose-400 border-[1px] py-1 px-4 rounded-full text-red-500">
          #1 Kids Learning platform
        </h1>
      </div>
      <div className="lg:pt-8">
        <h1 className="text-center py-4 lg:py-0 lg:text-6xl md:text-4xl text-xl font-semibold flex flex-col lg:gap-2 gap-1">
          <p>Creative Activities to Inspire</p>
          <p>
            <span className="text-rose-500">Learning</span> and Exploration
          </p>
        </h1>
        <h1 className="xl:pt-7 lg:py-7 md:text-center text-justify px-2 xl:px-[420px] lg:text-[18px] text-zinc-600">
          Explore a wide variety of fun and educational activities designed to
          engage young minds, and foster creativity.
        </h1>
      </div>
      <div className="lg:text-[18px] mt-4 lg:mt-0 text-sm flex justify-center gap-2">
        <NavLink
          to="/courses"
          className="border-[1px] lg:px-11 lg:py-4 py-3 px-4 rounded-full bg-zinc-800 hover:bg-red-400 ease-in-out duration-500 text-white"
        >
          Explore Courses
        </NavLink>
        <NavLink
          to="/login"
          className="border-black border-[1px] lg:py-4 lg:px-11 px-4 py-3 rounded-full hover:bg-red-400 ease-in-out duration-500 text-black hover:text-white hover:border-red-400"
        >
          Sign Up Now
        </NavLink>
      </div>
      <div className="lg:py-14 py-7 xl:px-16 px-4 h-full flex md:flex-row flex-col justify-center gap-6">
        {[kid1, kid2, kid3].map((item, index) => (
          <div
            key={index}
            className="h-[450px] rounded-full lg:w-1/4 w-full overflow-hidden shadow-md border-red-400 border-[1px]"
          >
            <img src={item} alt="kid" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
