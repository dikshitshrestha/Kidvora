import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";

export default function DiyLearning() {
  const courses = [
    {
      image: course1,
      heading: "Little Explorers Workshop",
      paragraph:
        "A playful learning journey filled with discovery, creativity, and adventure!",
    },
    {
      image: course2,
      heading: "Future Innovators Club",
      paragraph:
        "Inspiring young minds through hands-on STEM, creativity, and problem-solving.",
    },
    {
      image: course3,
      heading: "Bright Minds Academy",
      paragraph:
        "Unlock your child’s potential with fun and engaging learning activities!",
    },
  ];
  return (
    <div className="font-poppins p-20 bg-indigo-100">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold text-indigo-500">DIY LEARNING</h1>

        <h1 className="text-4xl">
          Hands-On Projects to Inspire Creativity and <br />
          Curiosity
        </h1>

        <div className="flex justify-between items-center w-full">
          <p>
            Explore fun and educational DIY activities that encourage hands-on
            learning.
          </p>
          <button className="flex gap-1 items-center bg-indigo-500 py-3 px-8 text-white rounded-full hover:bg-indigo-700 ease-in-out duration-300 underline">
            Explore More <IoMdArrowForward />
          </button>
        </div>
      </div>
      <div className="flex pt-10 gap-8">
        {courses.map((item, index) => (
          <div className="w-full rounded-2xl" key={index}>
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt="courses"
                className="h-full w-full object-cover hover:scale-125 duration-700"
              />
            </div>

            <div className="py-5 flex flex-col gap-3 px-1">
              <h1 className="text-2xl underline">{item.heading}</h1>
              <h1>{item.paragraph}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
