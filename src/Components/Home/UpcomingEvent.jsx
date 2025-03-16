import React from "react";
import kid from "../../assets/creativekid.jpg";
import { FaCheck } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";

export default function UpcomingEvent() {
  return (
    <div className="xl:py-24 py-12 lg:px-20 px-2 bg-indigo-200 font-poppins container mx-auto">
      <h1 className="text-indigo-600 font-semibold text-center">
        EVENTS & WORKSHOP
      </h1>
      <div className="text-center xl:py-5 py-3 flex flex-col gap-2">
        <h1 className="xl:text-4xl text-2xl font-semibold">Upcoming Events</h1>
        <p>Empowering young minds with a safe, interactive platform</p>
      </div>
      <div className="bg-white p-6 rounded-xl flex xl:flex-row flex-col">
        <div className="xl:w-1/2 xl:h-[700px] h-[400px] relative">
          <img src={kid} alt="" className="h-full w-full object-cover" />
          <div className="xl:text-lg bg-red-300 w-24 flex justify-center py-1 rounded-full absolute top-3 left-3">
            Its Free!
          </div>
          <div className="bg-white xl:p-8 p-3 rounded-lg absolute bottom-3 left-3 right-3">
            <h1 className="xl:text-4xl text-xl">Dr. Suhana Khatri</h1>
            <p className="text-zinc-700">
              Early Childhood Education Specialist
            </p>
          </div>
        </div>
        <div className="xl:w-1/2 xl:pl-10 py-3 xl:py-0">
          <h1 className="xl:text-5xl text-xl font-sans font-semibold text-zinc-800">
            introduce children to the fundamentals of robotics and engineering
          </h1>
          <div className="xl:py-5 py-3">
            <h1 className="border-[1px] max-w-max py-1 px-3 rounded-full border-indigo-400 text-indigo-400">
              11.00 PM - 12.00 PM
            </h1>
          </div>
          <p className="text-zinc-700">
            Join us for an exciting Robotics Workshop where kids will learn the
            basics of robotics, coding, and problem-solving through hands-on
            activities. Perfect for young innovators eager to explore the world
            of technology!
          </p>
          <div className="py-8">
            <div className="flex flex-col gap-3 py-6 px-5 rounded-xl border-[1px] shadow-md">
              {[
                "Hands-on Learning",
                "Develop Critical Thinking Skills",
                "Foster Creativity and Innovation",
                "Introduction to STEM",
              ].map((item, index) => (
                <div
                  className="flex text-sm xl:text-[17px] items-center gap-4"
                  key={index}
                >
                  <div className="text-indigo-400">
                    <FaCheck />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="text-xl text-rose-300">
                <BsCalendarDateFill />
              </div>
              <h1>Wednesday, 19 March 2025</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl text-rose-300">
                <IoLocation />
              </div>
              <h1>Online Via Zoom</h1>
            </div>
          </div>
          <div className="xl:pt-8 pt-4 flex justify-center xl:justify-start">
            <button className="bg-indigo-400 py-3 px-8 rounded-full text-white underline hover:bg-indigo-600 ease-in-out duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
