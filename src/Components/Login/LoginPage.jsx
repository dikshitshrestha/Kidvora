import React from "react";
import logo from "../../assets/google.png";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="font-poppins bg-indigo-100 lg:p-10 p-5 flex justify-center relative container mx-auto">
      <div className="bg-slate-100 lg:w-1/2 lg:py-6 lg:px-10 p-5 rounded-md">
        <div className="flex flex-col lg:gap-5 gap-2">
          <h1 className="lg:text-2xl font-semibold">Welcome back!</h1>
          <p className="lg:text-[17px] text-sm text-zinc-600 lg:text-start text-justify">
            Hey there! Ready to log in? Just enter your username and password
            below and you'll be back in action in no time. Let's go!
          </p>
          <div className="lg:px-3">
            <button className="bg-white w-full py-3 rounded-lg border-[1px] border-zinc-400 flex items-center gap-2 justify-center hover:border-indigo-400 ease-in-out duration-300">
              <img src={logo} alt="google" className="h-5" />
              <h1>Continue with google</h1>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center lg:py-6 py-3">
          <div className="flex-grow border-t-[1px] border-zinc-400"></div>
          <span className="px-3 lg:text-xl"> or </span>
          <div className="flex-grow border-t-[1px] border-zinc-400"></div>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[18px]">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="h-11 w-full focus:outline-none focus:ring-indigo-400 focus:ring-[1px] focus:border-none rounded-md border-zinc-400 border-[1px] px-4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[18px]">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="h-11 w-full focus:outline-none focus:ring-indigo-400 focus:ring-[1px] focus:border-none rounded-md border-zinc-400 border-[1px] px-4"
            />
          </div>
          <div className="flex flex-row items-center gap-1.5">
            <input
              type="checkbox"
              className="h-5 w-5 focus:outline-none focus:border-none rounded-md border-zinc-400 border-[1px] px-4"
            />
            <label className="text-[17px]">Remember me</label>
          </div>
          <button className="w-full bg-indigo-500 py-3 rounded-md text-white text-[18px] hover:bg-indigo-700 ease-in-out duration-300">
            Sign in
          </button>
        </form>
        <div className="py-5 text-center flex items-center justify-center gap-1.5">
          <h1 className="text-zinc-600">Don't have an account?</h1>
          <NavLink
            to="/login/register"
            className="underline text-indigo-500 hover:text-yellow-600 ease-in-out duration-300"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}
