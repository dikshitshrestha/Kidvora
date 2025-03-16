import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
import { SlCalender } from "react-icons/sl";
import { IoDocumentsSharp } from "react-icons/io5";

export default function HomeCourses() {
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
  ];
  return (
    <div className="font-poppins xl:p-20 py-10 px-5 container mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="lg:text-xl font-semibold text-indigo-500">
          POPULAR COURSES
        </h1>

        <h1 className="lg:text-4xl text-2xl">
          Explore Our Popular <br /> Courses
        </h1>

        <div className="flex xl:flex-row flex-col gap-4 text-justify justify-between lg:items-start xl:items-center items-center w-full">
          <p>
            Personalized learning journeys crafted to match every child’s unique
            abilities, fostering confidence, growth, and a lifelong
          </p>
          <a
            href="/courses"
            className="flex gap-1 items-center bg-indigo-500 py-3 px-5 text-white rounded-full hover:bg-indigo-700 ease-in-out duration-300 underline"
          >
            Explore More <IoMdArrowForward />
          </a>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col pt-10 gap-8">
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
            <div className="xl:py-8 py-5 flex flex-col gap-3 xl:gap-4">
              <div className="flex font-sans items-center justify-center text-zinc-500 gap-4">
                <h1 className="font-semibold xl:text-[17px] text-sm flex items-center gap-1">
                  <SlCalender />
                  March, 2025
                </h1>
                <a
                  href="/courses"
                  className="font-semibold underline hover:text-black duration-300 ease-in-out xl:text-[17px] text-sm flex items-center gap-0.5"
                >
                  <IoDocumentsSharp /> Courses
                </a>
              </div>
              <h1 className="text-center xl:text-2xl underline">
                {item.heading}
              </h1>
              <h1 className="text-center text-sm xl:text-[17px]">
                {item.paragraph}
              </h1>
            </div>
            <div className="flex justify-center">
              <a
                href={item.path}
                className="underline py-3 px-6 rounded-full border-[1px] text-indigo-400 hover:bg-indigo-400 hover:text-white hover:no-underline duration-300 ease-in-out"
              >
                See Detail
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
