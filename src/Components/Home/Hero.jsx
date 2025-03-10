import React from "react";
import { NavLink } from "react-router-dom";
import kid1 from "../../assets/kid1.jpg";
import kid2 from "../../assets/kid2.jpg";
import kid3 from "../../assets/kid3.jpg";
import kid4 from "../../assets/kid4.jpg";

export default function Hero() {
  return (
    <div className="bg-indigo-100 font-poppins">
      <div className=" text-[17px] flex justify-center w-full">
        <h1 className="border-purple-400 border-[1px] py-1 px-4 rounded-full text-purple-800">
          #1 Kids Learning platform
        </h1>
      </div>
      <div className="py-10">
        <h1 className="text-center text-6xl font-semibold flex flex-col gap-2">
          <h1>Welcome to Kidvora A</h1>
          <h1>
            <span className="text-purple-500">Fun Way</span> to Learn!
          </h1>
        </h1>
        <h1 className="pt-7 text-center px-[420px] text-zinc-700">
          Discover a wide range of interactive and engaging courses specially
          designed to captivate and educate children aged 4 to 12, fostering
          creativity, curiosity, and a lifelong love of learning through fun and
          meaningful experiences
        </h1>
      </div>
      <div className="text-[18px] flex justify-center gap-2">
        <NavLink
          to="/courses"
          className="border-[1px] px-11 py-3 rounded-full bg-indigo-400 hover:bg-indigo-800 ease-in-out duration-300 text-white"
        >
          Explore Courses
        </NavLink>
        <button className="border-indigo-400 border-[1px] px-11 py-3 rounded-full hover:bg-indigo-400 ease-in-out duration-300 text-indigo-400 hover:text-white">
          Sign Up Now
        </button>
      </div>
      <div className="py-20 px-16 h-full flex gap-6">
        {[kid1, kid2, kid3, kid4].map((item, index) => (
          <div
            key={index}
            className="h-[450px] rounded-full w-1/4 overflow-hidden border-purple-400 border-[1px] shadow-md"
          >
            <img src={item} alt="kid" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
