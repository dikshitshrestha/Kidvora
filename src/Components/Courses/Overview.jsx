import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
import course4 from "../../assets/journey2.jpg";
import course5 from "../../assets/journey3.jpg";
import course6 from "../../assets/interactive3.jpg";
import { SlCalender } from "react-icons/sl";
import { IoDocumentsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Overview() {
  const courses = [
    {
      image: course1,
      heading: "Little Explorers Workshop",
      paragraph:
        "A playful learning journey filled with discovery, creativity, and adventure!",
      path: "/courses/workshop",
    },
    {
      image: course2,
      heading: "Future Innovators Club",
      paragraph:
        "Inspiring young minds through hands-on STEM, creativity, and problem-solving.",
      path: "/courses/future",
    },
    {
      image: course3,
      heading: "Bright Minds Academy",
      paragraph:
        "Unlock your child’s potential with fun and engaging learning activities!",
      path: "/courses/bright",
    },
    {
      image: course4,
      heading: "Genius Kids Bootcamp",
      paragraph:
        "A dynamic learning program designed to develop curiosity, confidence, and skills for the future!",
      path: "/courses/bootcamp",
    },
    {
      image: course5,
      heading: "Smart Start Learning Hub",
      paragraph:
        "Unleash your child’s creativity with fun and engaging arts and crafts lessons, designed to spark.",
      path: "/courses/smart",
    },
    {
      image: course6,
      heading: "Creative Arts & Crafts",
      paragraph:
        "Unleash your child’s creativity with fun and engaging arts and crafts lessons, designed to spark.",
      path: "/courses/art",
    },
  ];
  return (
    <div className="font-poppins xl:p-20 py-10 px-5 lg:px-10 lg:py-20 container mx-auto">
      <div className="flex flex-col lg:gap-4 gap-2">
        <h1 className="lg:text-xl font-semibold text-indigo-500">
          COURSES OVERVIEW
        </h1>

        <h1 className="lg:text-5xl text-2xl">Unlock New Skills</h1>

        <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between items-start lg:items-center w-full">
          <p>
            Personalized learning journeys crafted to match every child’s unique
            <br />
            abilities, fostering confidence, growth, and a lifelong
          </p>
          <button className="flex gap-1 items-center bg-indigo-500 py-3 px-5 text-white rounded-full hover:bg-indigo-700 ease-in-out duration-300 underline">
            Explore More <IoMdArrowForward />
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 pt-10 xl:gap-8 gap-3">
        {courses.map((item, index) => (
          <div
            className="w-full border-[1px] border-zinc-300 rounded-2xl p-4"
            key={index}
          >
            <div className="h-56 relative">
              <div className="h-full overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt="courses"
                  className="h-full w-full object-cover hover:scale-125 duration-700"
                />
              </div>
              <div className="absolute -bottom-5 right-4 bg-indigo-400 leading-tight text-center w-12 h-12 flex items-center justify-center font-sans font-semibold text-white rounded-full">
                <h1>
                  2025 <br />
                  Mar
                </h1>
              </div>
            </div>
            <div className="py-8 flex flex-col gap-3">
              <div className="flex font-sans items-center justify-center text-zinc-500 gap-4">
                <h1 className="font-semibold flex items-center gap-1">
                  <SlCalender />
                  March, 2025
                </h1>
                <a
                  href="/courses"
                  className="font-semibold underline hover:text-black duration-300 ease-in-out text-[17px] flex items-center gap-0.5"
                >
                  <IoDocumentsSharp /> Courses
                </a>
              </div>
              <h1 className="text-center text-2xl underline">{item.heading}</h1>
              <h1 className="text-center">{item.paragraph}</h1>
            </div>
            <div className="flex justify-center">
              <NavLink
                to={item.path}
                className="underline py-3 px-6 rounded-full border-[1px] text-indigo-400 hover:bg-indigo-400 hover:text-white hover:no-underline duration-300 ease-in-out"
              >
                See Detail
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
