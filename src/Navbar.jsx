import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/assets/Kidvora.png";
import flag from "../src/assets/flag.png";

export default function Navbar() {
  const pages = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Activities", path: "/activities" },
    { label: "Blog", path: "/blog" },
  ];
  return (
    <div className="w-full xl:py-8 py-6 xl:px-20 px-2 bg-indigo-100 font-poppins container mx-auto">
      <div className="flex md:flex-row flex-col items-center md:justify-between gap-4 rounded-lg bg-white md:px-6 py-4 shadow-md">
        <div className="flex items-center gap-1.5 xl:text-2xl font-semibold">
          <img src={logo} alt="logo" className="xl:h-10 h-6" />
          <h1>Kidvora</h1>
        </div>
        <div className="flex xl:gap-10 gap-3 xl:text-[18px] text-sm font-normal">
          {pages.map((pages, index) => (
            <NavLink
              to={pages.path}
              key={index}
              className={({ isActive }) =>
                `hover:text-purple-800 duration-300 ease-in-out ${
                  isActive ? "text-purple-800" : ""
                }`
              }
            >
              {pages.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center xl:gap-5 gap-3">
          <div className="flex items-center gap-0.5 text-[18px]">
            <div className="xl:h-6 h-4 w-4 xl:w-6 rounded-full flex justify-center border-black overflow-hidden">
              <img src={flag} alt="flag" className="h-full object-cover" />
            </div>
            <h1 className="text-sm xl:text-[18px]">NEP</h1>
          </div>
          <div>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `border-[1px] hover:bg-purple-800 hover:text-white ease-in-out duration-300 border-zinc-200 xl:px-11 px-5 rounded-full text-sm xl:text-[18px] xl:py-3 py-2 ${
                  isActive ? "bg-purple-800 text-white" : "bg-white text-black"
                }`
              }
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
