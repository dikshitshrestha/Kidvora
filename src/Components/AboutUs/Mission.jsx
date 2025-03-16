import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";

export default function Mission() {
  const [isHovered, setIsHovered] = useState(null);
  const mission = [
    {
      icon: <FaBook />,
      heading: "Create Accessible Education",
      paragraph:
        "We are committed to making high-quality learning experiences available to children everywhere, regardless of their background.",
    },
    {
      icon: <PiStudentFill />,
      heading: "Inspiring Lifelong Learning",
      paragraph:
        "We aim to spark curiosity and cultivate a passion for lifelong learning in every child through engaging and interactive educational experiences.",
    },
    {
      icon: <FaBookReader />,
      heading: "Empower Child's Potential",
      paragraph:
        "Our vision is to provide tools and resources that help children build confidence and achieve their dreams. children build confidence and achieve their dreams.",
    },
    {
      icon: <IoSchoolSharp />,
      heading: "Create Accessible Education",
      paragraph:
        "We are committed to making high-quality learning experiences available to children everywhere, regardless of their background.",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 xl:pt-20 lg:py-16 xl:px-20 px-3 lg:px-5 gap-6 font-poppins container mx-auto">
      <div className="p-6 rounded-2xl flex flex-col lg:gap-4 gap-2">
        <h1 className="text-[17px] font-semibold text-indigo-500">
          MISSION & VISION
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl py-1">
            Inspiring Creativity, Building Brighter Futures
          </h1>
          <h1 className="text-zinc-600">
            Our mission is to ignite lifelong learning, empower potential, and
            make quality education.
          </h1>
        </div>
      </div>
      {mission.map((item, index) => (
        <div
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(null)}
          key={index}
          className={`p-6 rounded-2xl flex flex-col lg:gap-16 gap-8 shadow-md border-[1px] ${
            isHovered === index
              ? "bg-indigo-400 text-white ease-in-out duration-500"
              : ""
          }`}
        >
          <div className=" bg-indigo-200 text-indigo-400 h-12 w-12 flex items-center justify-center text-2xl rounded-full">
            {item.icon}
          </div>
          <div>
            <h1 className="lg:text-2xl text-xl lg:py-1">{item.heading}</h1>
            <h1 className="mt-2">{item.paragraph}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
