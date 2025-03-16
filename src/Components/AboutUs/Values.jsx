import React, { useState } from "react";
import { FaSchool } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { FaBookAtlas } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";
import { LuBookOpenCheck } from "react-icons/lu";
import { RiContactsBook3Line } from "react-icons/ri";

export default function Values() {
  const mission = [
    {
      icon: <FaSchool />,
      heading: "Creativity and Innovation",
      paragraph:
        "Our values shape the foundation of everything we do at Kidsover, ensuring that we create a safe, engaging, and empowering learning environment for children to grow and thrive",
    },
    {
      icon: <GiSchoolBag />,
      heading: "Inclusivity and Diversity",
      paragraph:
        "Our values shape the foundation of everything we do at Kidvora, ensuring that we create a safe, engaging, and empowering learning environment for children to grow and thrive",
    },
    {
      icon: <FaBookAtlas />,
      heading: "Empathy and Compassion",
      paragraph:
        "Our values shape the foundation of everything we do at Kidvora, ensuring that we create a safe, engaging, and empowering learning environment for children to grow and thrive",
    },
    {
      icon: <GrDocumentPerformance />,
      heading: "Integrity and Transparency",
      paragraph:
        "Our values shape the foundation of everything we do at Kidvora, ensuring that we create a safe, engaging, and empowering learning environment for children to grow and thrive",
    },
    {
      icon: <LuBookOpenCheck />,
      heading: "Excellence and Growth",
      paragraph:
        "Our values shape the foundation of everything we do at Kidvora, ensuring that we create a safe, engaging, and empowering learning environment for children to grow and thrive",
    },
    {
      icon: <RiContactsBook3Line />,
      heading: "Collaboration and Community",
      paragraph:
        "Our values shape the foundation of everything we do at Kidvora, ensuring that we create a safe, engaging, and empowering learning environment for children to grow and thrive",
    },
  ];
  const [isHovered, setIsHovered] = useState(null);
  return (
    <div className="xl:p-20 lg:py-16 lg:px-6 px-2 py-8 bg-indigo-400 font-poppins container mx-auto">
      <div className="text-center">
        <h1 className="font-semibold text-white">OUR VALUES</h1>
        <h1 className="lg:text-4xl text-2xl text-white py-5">
          Guided by Values, Empowering Young <br />
          <span className="text-red-300">Minds Every Day</span>
        </h1>
        <p className="text-white">
          Discover the passionate minds driving Kidsover mission to empower
          young learners.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 pt-12">
        {mission.map((item, index) => (
          <div
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            key={index}
            className={`p-6 rounded-2xl flex flex-col gap-14 bg-white ${
              isHovered === index ? "bg-red-200 ease-in-out duration-300" : ""
            }`}
          >
            <div className=" bg-red-300 text-white h-12 w-12 flex items-center justify-center text-2xl rounded-full">
              {item.icon}
            </div>
            <div>
              <h1 className="text-2xl py-1">{item.heading}</h1>
              <h1 className="mt-2 text-zinc-600">{item.paragraph}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
