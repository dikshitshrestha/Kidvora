import React from "react";
import { LuPencilRuler } from "react-icons/lu";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiCrystalGrowth } from "react-icons/gi";
import { CiGlobe } from "react-icons/ci";
import kid from "../../assets/happykid.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function ChooseUs() {
  const reasons = [
    {
      icon: <LuPencilRuler />,
      heading: "Interactive Learning Tools",
      paragraph:
        "We combine fun and education with cutting-edge technology, making learning a delightful experience.",
    },
    {
      icon: <MdOutlineCastForEducation />,
      heading: "Expert-Curated Content",
      paragraph:
        "Designed by educators and psychologists to nurture both academic and emotional growth.",
    },
    {
      icon: <GiCrystalGrowth />,
      heading: "Personalized Growth Paths",
      paragraph:
        "Our platform adapts to each child's pace, ensuring a customized journey toward success.",
    },
    {
      icon: <CiGlobe />,
      heading: "Safe and Child-Friendly Environment",
      paragraph:
        "A secure digital space where children can explore, learn, and thrive confidently.",
    },
  ];
  return (
    <div className="bg-red-100 font-poppins xl:py-20 py-10 container mx-auto">
      <h1 className="font-semibold text-indigo-700 text-center">
        WHY CHOOSE US
      </h1>
      <div className="text-center flex flex-col gap-2 xl:py-6 py-3">
        <h1 className="xl:text-4xl text-xl font-semibold">
          Empowering Young Minds to Grow and Shine
        </h1>
        <h1 className="xl:text-[18px] text-sm text-zinc-700">
          Unlocking Every Child’s Potential with Engaging Learning Experiences
        </h1>
      </div>

      <div className="flex items-center xl:flex-row flex-col w-full gap-6 xl:px-20 px-5 xl:py-10 py-5">
        <div className="flex flex-col md:flex-row xl:flex-col gap-6 xl:w-1/3">
          {reasons.slice(0, 2).map((reasons, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl flex flex-col gap-16 shadow-md"
            >
              <div className="text-white bg-red-300 h-12 w-12 flex items-center justify-center text-2xl rounded-full">
                {reasons.icon}
              </div>
              <div>
                <h1 className="text-xl py-1">{reasons.heading}</h1>
                <h1 className="text-zinc-600">{reasons.paragraph}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="row-span-2 xl:w-1/3 h-[520px] md:w-full rounded-2xl overflow-hidden">
          <img src={kid} alt="kid" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col gap-6 xl:w-1/3">
          {reasons.slice(2, 4).map((reasons, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl flex flex-col gap-16 shadow-md"
            >
              <div className="text-white bg-red-300 h-12 w-12 flex items-center justify-center text-2xl rounded-full">
                {reasons.icon}
              </div>
              <div>
                <h1 className="text-xl py-1">{reasons.heading}</h1>
                <h1 className="text-zinc-600">{reasons.paragraph}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href="#" className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-1.5 bg-red-300 px- xl:text-xl px-5 py-2 rounded-full text-white ease-in-out duration-300 underline hover:bg-indigo-400">
          <h1>Explore More</h1>
          <IoArrowForwardSharp />
        </div>
      </a>
    </div>
  );
}
