import React from "react";
import { NavLink } from "react-router-dom";
import kid1 from "../../assets/kid5.jpg";
import kid2 from "../../assets/kid6.jpg";
import kid3 from "../../assets/kid7.jpg";

export default function AboutHeader() {
  return (
    <div className="bg-indigo-100 font-poppins">
      <div className=" text-[17px] flex justify-center w-full">
        <h1 className="border-rose-400 border-[1px] py-1 px-4 rounded-full text-red-500">
          #1 Kids Learning platform
        </h1>
      </div>
      <div className="py-10">
        <h1 className="text-center text-6xl font-semibold flex flex-col gap-2">
          <p>Inspiring Young Minds, Building</p>
          <p>
            <span className="text-rose-500">Bright Futures</span> Together
          </p>
        </h1>
        <h1 className="pt-7 text-center px-[420px] text-[18px] text-zinc-600">
          Empowering children through fun, engaging, and innovative learning
          experiences that ignite their curiosity and creativity
        </h1>
      </div>
      <div className="text-[18px] flex justify-center gap-2">
        <NavLink
          to="/courses"
          className="border-[1px] px-11 py-3 rounded-full bg-zinc-800 hover:bg-red-400 ease-in-out duration-500 text-white"
        >
          Explore Courses
        </NavLink>
        <NavLink
          to="/login"
          className="border-black border-[1px] px-11 py-3 rounded-full hover:bg-red-400 ease-in-out duration-500 text-black hover:text-white hover:border-red-400"
        >
          Sign Up Now
        </NavLink>
      </div>
      <div className="py-14 px-16 h-full flex justify-center gap-6">
        {[kid1, kid2, kid3].map((item, index) => (
          <div
            key={index}
            className="h-[450px] rounded-full w-1/4 overflow-hidden border-red-400 border-[1px] shadow-md"
          >
            <img src={item} alt="kid" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
