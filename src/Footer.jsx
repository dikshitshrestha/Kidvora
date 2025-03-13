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
    <div className="bg-zinc-900 px-20 py-20 font-poppins">
      <div className="bg-indigo-400 pt-10 rounded-3xl flex px-20">
        <div className="w-1/2 pr-20 flex flex-col justify-center gap-10">
          <div className="text-white flex flex-col gap-4">
            <h1 className="text-7xl">Start Your Learning Journey Today</h1>
            <h1>Empower Young Minds with Engaging and Interactive Lessons</h1>
          </div>
          <div>
            <button className="bg-white text-[18px] px-6 py-3 rounded-full text-indigo-500 hover:bg-black hover:text-white duration-300 ease-in-out">
              <h1 className="underline flex gap-1.5 items-center ">
                Sign Up Now <MdOutlineArrowOutward />
              </h1>
            </button>
          </div>
        </div>
        <div className="h-[500px] w-1/2 flex justify-end">
          <img src={student} alt="" className="h-full" />
        </div>
      </div>
      <div className="py-28 flex">
        <div className="w-2/6">
          <h1 className="flex items-center gap-1">
            <img src={logo} alt="logo" className="h-10" />
            <p className="text-3xl text-white font-semibold">Kidvora</p>
          </h1>
          <h1 className="py-4 text-white">
            Welcome to Kidsover A Fun Way to Learn!
          </h1>
        </div>
        <div className="flex justify-start gap-28 w-4/6">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-white">Home</h1>
            <div className="text-xl flex flex-col gap-2 text-zinc-600 ">
              <a href="#" className="hover:text-white ease-in-out duration-300">
                Homepage
              </a>
              <a href="#" className="hover:text-white ease-in-out duration-300">
                About Us
              </a>
              <a href="#" className="hover:text-white ease-in-out duration-300">
                Courses
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-white">About Us</h1>
            <div className="text-xl flex flex-col gap-2 text-zinc-600">
              <a href="#" className="hover:text-white ease-in-out duration-300">
                Homepage
              </a>
              <a href="#" className="hover:text-white ease-in-out duration-300">
                About Us
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-white">Courses</h1>
            <div className="text-xl flex flex-col gap-2 text-zinc-600">
              <a href="#" className="hover:text-white ease-in-out duration-300">
                Homepage
              </a>
              <a href="#" className="hover:text-white ease-in-out duration-300">
                About Us
              </a>
              <a href="#" className="hover:text-white ease-in-out duration-300">
                Courses
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-white">Activities</h1>
            <div className="text-xl flex flex-col gap-2 text-zinc-600">
              <a href="#" className="hover:text-white ease-in-out duration-300">
                Homepage
              </a>
              <a href="#" className="hover:text-white ease-in-out duration-300">
                About Us
              </a>
              <a href="#" className="hover:text-white ease-in-out duration-300">
                Acitivites
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
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
