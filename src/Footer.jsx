import React, { useState } from "react";
import student from "../src/assets/student.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../src/assets/Kidvora.png";

export default function Footer() {
  const footer = ["Homepage", "About Us", "Courses"];
  return (
    <div className="bg-zinc-900 xl:px-20 xl:py-20 py-10 font-poppins container mx-auto">
      <div className="bg-indigo-400 pt-10 rounded-3xl flex lg:flex-row flex-col xl:px-20 lg:px-5">
        <div className="lg:w-1/2 w-full lg:pr-20 flex flex-col justify-center xl:gap-10 gap-5">
          <div className="text-white flex flex-col xl:gap-4 gap-2 text-center lg:text-start">
            <h1 className="xl:text-7xl lg:text-5xl">
              Start Your Learning Journey Today
            </h1>
            <h1 className="text-sm xl:text-[17px]">
              Empower Young Minds with Engaging and Interactive Lessons
            </h1>
          </div>
          <div className="flex justify-center lg:justify-start xl:mb-0 mb-3">
            <button className="bg-white xl:text-[18px] text-sm px-6 py-3 rounded-full text-indigo-500 hover:bg-black hover:text-white duration-300 ease-in-out">
              <a href="/login" className="underline flex gap-1.5 items-center ">
                Sign Up Now <MdOutlineArrowOutward />
              </a>
            </button>
          </div>
        </div>
        <div className="lg:h-[500px] h-48 lg:w-1/2 flex xl:justify-end justify-center">
          <img src={student} alt="" className="h-full" />
        </div>
      </div>
      <div className="xl:py-28 py-10 flex xl:flex-row flex-col">
        <div className="xl:w-2/6">
          <h1 className="flex items-center justify-center xl:justify-start gap-1">
            <img src={logo} alt="logo" className="h-10" />
            <p className="text-3xl text-white font-semibold">Kidvora</p>
          </h1>
          <h1 className="py-4 text-white text-center xl:text-start">
            Welcome to Kidsover A Fun Way to Learn!
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-start place-self-center gap-4 xl:gap-28 w-4/6">
          <div className="flex flex-col xl:gap-3 gap-1">
            <h1 className="xl:text-2xl font-semibold text-white">Home</h1>
            <div className="xl:text-xl gap-1 text-sm flex flex-col xl:gap-2 text-zinc-600 ">
              <a href="/" className="hover:text-white ease-in-out duration-300">
                Homepage
              </a>
              <a
                href="/about"
                className="hover:text-white ease-in-out duration-300"
              >
                About Us
              </a>
              <a
                href="/courses"
                className="hover:text-white ease-in-out duration-300"
              >
                Courses
              </a>
            </div>
          </div>

          <div className="flex flex-col xl:gap-3 gap-1">
            <h1 className="xl:text-2xl font-semibold text-white">About Us</h1>
            <div className="xl:text-xl text-sm flex flex-col xl:gap-2 gap-1 text-zinc-600">
              <a href="/" className="hover:text-white ease-in-out duration-300">
                Homepage
              </a>
              <a
                href="/about"
                className="hover:text-white ease-in-out duration-300"
              >
                About Us
              </a>
            </div>
          </div>

          <div className="flex flex-col xl:gap-3 gap-1">
            <h1 className="xl:text-2xl font-semibold text-white">Courses</h1>
            <div className="xl:text-xl text-sm flex flex-col xl:gap-2 gap-1 text-zinc-600">
              <a href="/" className="hover:text-white ease-in-out duration-300">
                Homepage
              </a>
              <a
                href="/about"
                className="hover:text-white ease-in-out duration-300"
              >
                About Us
              </a>
              <a
                href="/courses"
                className="hover:text-white ease-in-out duration-300"
              >
                Courses
              </a>
            </div>
          </div>
          <div className="flex flex-col xl:gap-3 gap-1">
            <h1 className="xl:text-2xl font-semibold text-white">Activities</h1>
            <div className="xl:text-xl text-sm flex flex-col xl:gap-2 gap-1 text-zinc-600">
              <a href="/" className="hover:text-white ease-in-out duration-300">
                Homepage
              </a>
              <a
                href="/about"
                className="hover:text-white ease-in-out duration-300"
              >
                About Us
              </a>
              <a
                href="/activities"
                className="hover:text-white ease-in-out duration-300"
              >
                Acitivites
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col gap-3 justify-between items-center">
        <div className="flex gap-3">
          {[
            <FaWhatsapp />,
            <FaInstagram />,
            <FaLinkedin />,
            <FaXTwitter />,
          ].map((icon, index) => (
            <a
              href="#"
              className="bg-white px-2 py-2 text-3xl rounded-lg hover:bg-zinc-300 ease-in-out duration-300"
              key={index}
            >
              {icon}
            </a>
          ))}
        </div>
        <h1 className="text-white">
          Copyright © 2024 Kidvora, All right reserved
        </h1>
      </div>
    </div>
  );
}
