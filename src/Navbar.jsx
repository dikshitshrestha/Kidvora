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
    <div className="w-full py-8 px-20 bg-indigo-100 font-poppins">
      <div className="flex items-center justify-between rounded-lg bg-white px-6 py-4 shadow-md">
        <div className="flex items-center gap-1.5 text-2xl font-semibold">
          <img src={logo} alt="logo" className="h-10" />
          <h1>Kidvora</h1>
        </div>
        <div className="flex gap-10 text-[18px] font-normal">
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
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-0.5 text-[18px]">
            <div className="h-6 w-6 rounded-full flex justify-center border-black overflow-hidden">
              <img src={flag} alt="flag" className="h-full object-cover" />
            </div>
            <h1>NEP</h1>
          </div>
          <div>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `border-[1px] hover:bg-purple-800 hover:text-white ease-in-out duration-300 border-zinc-200 px-11 rounded-full text-[18px] py-3 ${
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
