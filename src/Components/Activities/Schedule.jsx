import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

export default function Schedule() {
  const schedule = [
    {
      heading1: "Arts & Crafts",
      date: "03",
      heading2: "Drawing and Painting Workshop",
      time: "10:00 AM – 11:00 AM",
    },
    {
      heading1: "STEM Explorers",
      date: "05",
      heading2: "Experiment: Building a Volcano",
      time: "11:30 AM – 12:30 PM",
    },
    {
      heading1: "Geography",
      date: "06",
      heading2: "Geography Adventure Game",
      time: "1:00 PM – 2:00 PM",
    },
  ];
  return (
    <div className="font-poppins p-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-indigo-500">
          WEEKLY SCHEDULE
        </h1>
        <h1 className="text-4xl">
          Engaging Learning, Fun <br /> Activities Every Week for Kids
        </h1>
        <p>
          Our weekly schedule is packed with exciting, interactive <br />{" "}
          lessons and hands-on activities
        </p>
      </div>
      <div className="flex pt-10 gap-5">
        {schedule.map((item, index) => (
          <div
            className="w-full rounded-2xl p-4 bg-red-300 shadow-lg transition-transform hover:scale-x-105 hover:scale-y-105 hover:scale-b hover:bg-indigo-300 duration-500 ease-in-out"
            key={index}
          >
            <div className="flex flex-col gap-3 text-white">
              <h1 className="border-[1px] max-w-max px-2 py-1 rounded-full border-white">
                {item.heading1}
              </h1>
              <h1 className="text-7xl">{item.date}</h1>
              <h1 className="text-[18px]">April 2025</h1>
            </div>

            <div className="flex flex-col gap-5 text-white mt-28">
              <div className="flex flex-col gap-1.5">
                <h1 className="text-2xl">{item.heading2}</h1>
                <p className="text-[18px]">{item.time}</p>
              </div>
              <div className="flex items-center text-xl gap-1">
                <IoLocationOutline /> <h1>Pretty Gallery - Alabama</h1>
              </div>
              <a
                href="#"
                className="underline text-[17px] max-w-max flex  items-center gap-1.5 py-3 px-6 rounded-full text-red-300 bg-black hover:text-indigo-400 duration-300 ease-in-out"
              >
                Explore More <LuArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
