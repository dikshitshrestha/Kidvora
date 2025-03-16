import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function Landing() {
  return (
    <div className="font-poppins xl:py-20 py-10 container mx-auto">
      <div className="flex justify-center ">
        <button className="flex items-center text-sm xl:gap-1.5 gap-1 bg-indigo-500 px-3 py-1 text-white rounded-full">
          <HiOutlineUserGroup />
          <h1>20+ Expert educators and child development</h1>
        </button>
      </div>
      <div className="xl:text-5xl md:text-2xl px-2 xl:px-60 text-center py-3 xl:py-8">
        <h1>
          “We are a team of passionate educators, innovative designers, and
          technology enthusiasts dedicated to creating a safe
        </h1>
        <h1 className="text-zinc-400">
          and interactive space where children can explore, grow, and succeed.”
        </h1>
      </div>
      <div className="flex md:flex-row px-5 flex-col text-center py-4 justify-center xl:gap-8 gap-4 items-center">
        {[
          { number: "5,000+", label: "Happy learners" },
          { number: "120+", label: "Engaging activities" },
          { number: "98%", label: "Engaging activities" },
        ].map((item, index) => (
          <div
            key={index}
            className="xl:py-11 py-5 xl:px-28 px-7 border-[1px] border-indigo-500 rounded-3xl bg-indigo-50 flex flex-col xl:gap-3"
          >
            <h1 className="xl:text-6xl text-2xl">{item.number}</h1>
            <p className="xl:text-2xl">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
