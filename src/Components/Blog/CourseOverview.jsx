import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import kid1 from "../../assets/course2.jpg";
import kid2 from "../../assets/Gallery3.jpg";
import kid3 from "../../assets/journey3.jpg";
import kid4 from "../../assets/kid7.jpg";
import kid5 from "../../assets/Gallery5.jpg";
import learn1 from "../../assets/learn1.jpg";
import learn2 from "../../assets/learn2.jpg";
import learn3 from "../../assets/learn3.jpg";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";

export default function CourseOverview() {
  const [bgImage, setBgImage] = useState(kid1);
  const overview = [
    {
      heading: "Encourage children to care for robotics by building projects.",
      paragraph: "Learn about robotics, their nature, and how to build them.",
      image: learn1,
    },
    {
      heading:
        "Discover fun and simple activities to spark imaginative play at home.",
      paragraph: "This fun experiment teaches kids about art and craft.",
      image: learn2,
    },
    {
      heading:
        "Discover how to create a mesmerizing science projects using simple items",
      paragraph: "This fun experiment teaches kids about density and chemical.",
      image: learn3,
    },
  ];
  return (
    <div className="font-poppins lg:py-20 py-10 xl:px-14 lg:px-5 container mx-auto">
      <div>
        <h1 className="lg:text-xl px-5 lg:px-0 font-semibold text-indigo-500">
          COURSES OVERVIEW
        </h1>
        <h1 className="py-4 text-2xl px-5 lg:px-0 lg:text-4xl">
          Learn from the Best
        </h1>
        <div className="flex lg:flex-row px-5 lg:px-0 flex-col lg:items-center items-start justify-between">
          <p className="text-zinc-700">
            Explore our featured articles filled with expert tips, engaging
            stories, and valuable insights
          </p>
          <NavLink
            href="/courses"
            className="flex items-center mt-5 lg:mt-0 gap-1.5 text-[17px] bg-indigo-400 py-3 px-12 underline text-white hover:bg-indigo-600 duration-300 ease-in-out rounded-full"
          >
            Explore More <GoArrowRight />
          </NavLink>
        </div>
        <div className="lg:flex lg:flex-row lg:justify-center grid grid-cols-3 gap-1 lg:gap-2 py-8">
          {[kid1, kid2, kid3, kid4, kid5].map((image, index) => {
            const label = [
              "All",
              "Educational",
              "Parenting Tips",
              "Activity",
              "Success Stories",
            ];
            return (
              <div key={index}>
                <button
                  onClick={() => setBgImage(image)}
                  className={`lg:text-[17px] text-sm py-3 lg:py-3 w-full lg:px-12 hover:bg-indigo-400 hover:text-white duration-300 ease-in-out rounded-full ${
                    bgImage === image
                      ? "bg-indigo-400 text-white"
                      : "bg-zinc-200 text-zinc-800"
                  }`}
                >
                  {label[index]}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-6 items-center lg:flex-row flex-col px-5">
        <div className="lg:h-[600px] h-96 lg:w-1/2 rounded-2xl overflow-hidden">
          <img
            src={bgImage}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-10">
          {overview.map((item, index) => (
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 w-4/5">
                <h1 className="font-sans text-zinc-700">Uncategorized</h1>
                <h1 className="text-xl underline">{item.heading}</h1>
                <div className="text-zinc-600 flex items-center gap-3">
                  <h1 className="flex items-center gap-1">
                    <FaRegCircleUser /> admin
                  </h1>
                  <h1 className="flex items-center gap-1">
                    <SlCalender /> March, 2025
                  </h1>
                </div>
                <p className="text-indigo-400">{item.paragraph}</p>
              </div>
              <div className="h-32 w-1/5 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt="kid"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
