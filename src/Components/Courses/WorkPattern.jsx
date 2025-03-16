import React from "react";
import { MdOutlineLockPerson } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";

export default function WorkPattern() {
  const works = [
    {
      icon: <MdOutlineLockPerson />,
      heading: "Create an Account",
      paragraph:
        "Sign up with a few simple details to get started and unlock access to all our courses. Sign up with a few simple details to get started and unlock access to all our courses.",
    },
    {
      icon: <MdMenuBook />,
      heading: "Choose Your Courses",
      paragraph:
        "Browse our wide range of engaging classes and select the ones that best fit your child's interests and learning needs. ones that best fit your child's interests and learning needs.",
    },
    {
      icon: <FaBookOpenReader />,
      heading: "Start Learning",
      paragraph:
        "Enroll in your selected courses and begin the fun, interactive learning journey right away! Enroll in your selected courses and begin the fun.",
    },
  ];
  return (
    <div className="font-poppins xl:p-20 py-10 px-5 lg:py-20 lg:px-10 bg-red-100 container mx-auto">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="font-semibold text-indigo-500">HOW IT WORKS</h1>
        <h1 className="lg:text-4xl text-2xl">Enroll in 3 Easy Steps</h1>
        <p className="text-zinc-700 lg:text-[17px] text-sm">
          Getting started is simple! Follow these three easy steps to enroll and
          <br />
          begin your child’s learning adventure today
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-6 pt-10">
        {works.map((works, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md lg:w-1/2 overflow-hidden"
          >
            <div className="h-full w-full flex flex-col gap-16 group-hover:bg-indigo-50 p-6">
              <div className="text-white bg-red-300 h-12 w-12 flex items-center justify-center text-2xl rounded-full">
                {works.icon}
              </div>
              <div>
                <h1 className="text-2xl py-2">{works.heading}</h1>
                <h1 className="text-zinc-600">{works.paragraph}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
