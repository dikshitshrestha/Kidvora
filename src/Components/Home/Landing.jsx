import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function Landing() {
  return (
    <div className="font-poppins py-20">
      <div className="flex justify-center ">
        <button className="flex items-center gap-1.5 bg-indigo-500 px-3 py-1 text-white rounded-full">
          <HiOutlineUserGroup />
          <h1>20+ Expert educators and child development</h1>
        </button>
      </div>
      <div className="text-5xl px-60 text-center py-8">
        <h1>
          “We are a team of passionate educators, innovative designers, and
          technology enthusiasts dedicated to creating a safe
        </h1>
        <h1 className="text-zinc-400">
          and interactive space where children can explore, grow, and succeed.”
        </h1>
      </div>
      <div className="flex text-center py-4 justify-center gap-8 items-center">
        {[
          { number: "5,000+", label: "Happy learners" },
          { number: "120+", label: "Engaging activities" },
          { number: "98%", label: "Engaging activities" },
        ].map((item, index) => (
          <div
            key={index}
            className="py-11 px-28 border-[1px] border-indigo-500 rounded-3xl bg-indigo-50 flex flex-col gap-3"
          >
            <h1 className="text-6xl">{item.number}</h1>
            <p className="text-2xl">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
