import React from "react";
import { FaStar } from "react-icons/fa6";
import logo from "../../assets/Kidvora.png";
import photo from "../../assets/course3.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { BsAward } from "react-icons/bs";

export default function BrightMind() {
  const stars = [];
  Array.from({ length: 5 }).forEach((_, index) =>
    stars.push(<FaStar key={index} />)
  );
  return (
    <div className="bg-indigo-100 px-20 py-14 font-poppins">
      <h1 className="text-3xl font-semibold">Bright Minds Academy</h1>
      <div className="flex items-center gap-8 text-zinc-600 py-7">
        <div className="flex items-center gap-1.5">
          <div className="p-1 border-black border-[1px] bg-white max-w-max rounded-full">
            <img src={logo} alt="logo" className="h-4" />
          </div>
          <h1>By Kidvora Team</h1>
        </div>
        <h1>Category: Academic Enrichment</h1>
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
              Unlock a world of possibilities with Bright Minds Academy! This
              program is crafted to support young learners in developing
              essential skills through engaging activities, interactive lessons,
              and creative challenges. Whether your child enjoys puzzles,
              storytelling, or hands-on experiments, our academy provides a fun
              and stimulating environment that encourages a lifelong love for
              learning.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold mt-8 py-3">
              What Will You Learn?
            </h1>
            {[
              "Engage in interactive learning activities across multiple subjects",
              "Enhance critical thinking through puzzles and logic exercises",
              "Boost creativity with storytelling and writing prompts",
              "Practice key academic skills with printable worksheets",
              "Track progress with personalized feedback and assessments",
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
                "Fun and interactive learning modules",
                "Printable worksheets and practice exercises",
                "Educational games and puzzles for skill development",
                "Access to expert-led video lessons",
                "Progress tracking tools and personalized feedback",
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
              <h1>Beginner to Intermediate</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-indigo-500 text-xl">
                <RiTimeLine />
              </div>
              <h1>3 hour 30 minutes Duration</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-indigo-500 text-xl">
                <BsAward />
              </div>
              <h1>Achievement Certificate</h1>
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
