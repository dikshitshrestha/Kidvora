import React from "react";
import { FaStar } from "react-icons/fa6";
import logo from "../../assets/Kidvora.png";
import photo from "../../assets/course1.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { BsAward } from "react-icons/bs";

export default function Workshop() {
  const stars = [];
  Array.from({ length: 5 }).forEach((_, index) =>
    stars.push(<FaStar key={index} />)
  );
  return (
    <div className="bg-indigo-100 xl:px-20 lg:px-10 container mx-auto py-14 font-poppins">
      <h1 className="text-3xl font-semibold">Little Explorers Workshop</h1>
      <div className="flex items-center gap-8 text-zinc-600 py-7">
        <div className="flex items-center gap-1.5">
          <div className="p-1 border-black border-[1px] bg-white max-w-max rounded-full">
            <img src={logo} alt="logo" className="h-4" />
          </div>
          <h1>By Kidvora Team</h1>
        </div>
        <h1>Category: Early Learning & Exploration</h1>
        <h1 className="flex text-yellow-500 text-xl">{stars}</h1>
      </div>
      <div className="flex">
        <div className="w-3/5 ">
          <div className="h-[600px] w-full overflow-hidden rounded-lg">
            <img src={photo} alt="art" className="h-full w-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl py-2 mt-4 font-semibold">About Course</h1>
            <p className="text-justify text-[17px] text-zinc-700">
              Embark on an exciting journey of discovery with our Little
              Explorers Workshop! This program is designed to ignite curiosity,
              inspire creativity, and foster a love for learning through
              interactive activities and playful exploration. Whether your child
              loves hands-on experiments or imaginative storytelling, this
              workshop provides a fun-filled environment that nurtures growth,
              confidence, and a sense of adventure.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold mt-8 py-3">
              What Will You Learn?
            </h1>
            {[
              "Engage in hands-on science and sensory play activities",
              "Explore interactive storytelling and role-playing adventures",
              "Solve fun puzzles and brain-teasing challenges",
              "Discover nature and the world through exciting experiments",
              "Enjoy creative play with printable worksheets and activity sheets",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-indigo-500 text-xl">
                  <FaCheckCircle />
                </div>
                <h1 className="text-[18px] text-zinc-600">{item}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-10 w-2/5 flex flex-col gap-5">
          <div className="pl-8 py-7 border-[1px] border-zinc-500 rounded-md">
            <h1 className="text-2xl font-semibold">Material Includes</h1>
            <div className="flex flex-col gap-2 mt-3">
              {[
                "Engaging activity sheets and discovery worksheets",
                "Interactive storytelling and role-playing guides",
                "Hands-on science and sensory play activities",
                "Printable puzzles and brain-teasing games",
                "Access to a supportive learning community",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-indigo-500 text-xl">
                    <FaCheckCircle />
                  </div>
                  <h1 className="text-[18px] text-zinc-600">{item}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[18px] text-zinc-600 pl-8 py-7 border-[1px] border-zinc-500 rounded-md flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="text-indigo-500 text-xl">
                <IoIosStats />
              </div>
              <h1>Beginner</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-indigo-500 text-xl">
                <RiTimeLine />
              </div>
              <h1>2 hours Duration</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-indigo-500 text-xl">
                <BsAward />
              </div>
              <h1>Certificate of Participation</h1>
            </div>
          </div>
          <a
            href="#"
            className="py-3 w-full bg-indigo-400 text-[18px] rounded-full text-white hover:bg-indigo-600 duration-300 ease-in-out flex justify-center items-center"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
}
