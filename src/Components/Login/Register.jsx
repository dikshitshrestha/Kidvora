import React from "react";
import logo from "../../assets/google.png";

export default function Register() {
  return (
    <div className="font-poppins bg-indigo-100 pb-10 lg:px-0 px-5 flex justify-center relative container mx-auto">
      <div className="bg-slate-100 lg:w-1/2 lg:py-6 lg:px-10 p-5 rounded-md">
        <div className="flex flex-col lg:gap-5 gap-2">
          <h1 className="lg:text-2xl font-semibold">Create Your Account</h1>
          <p className="lg:text-[17px] text-sm  text-zinc-600">
            Hey there! Ready to join the party? We just need a few details from
            you to get started. Let's do this!
          </p>
          <div className="px-3">
            <button className="bg-white w-full py-3 rounded-lg border-[1px] border-zinc-400 flex items-center gap-2 justify-center hover:border-indigo-400 ease-in-out duration-300">
              <img src={logo} alt="google" className="h-5" />
              <h1>Continue with google</h1>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center lg:py-6 py-3">
          <div className="flex-grow border-t-[1px] border-zinc-400"></div>
          <span className="px-3 text-xl"> or </span>
          <div className="flex-grow border-t-[1px] border-zinc-400"></div>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="flex flex-col gap-2 lg:w-1/2">
              <label className="text-[18px]">First Name</label>
              <input
                type="text"
                placeholder="Enter you first name"
                className="h-11 w-full focus:outline-none focus:ring-indigo-400 focus:ring-[1px] focus:border-none rounded-md border-zinc-400 border-[1px] px-4"
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-1/2">
              <label className="text-[18px]">Last Name</label>
              <input
                type="text"
                placeholder="Enter you last name"
                className="h-11 w-full focus:outline-none focus:ring-indigo-400 focus:ring-[1px] focus:border-none rounded-md border-zinc-400 border-[1px] px-4"
              />
            </div>
          </div>
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
          <div className="flex flex-col gap-2">
            <label className="text-[18px]">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter password"
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
            Register
          </button>
        </form>
        <div className="py-5 text-center flex items-center justify-center gap-1.5">
          <h1 className="text-zinc-600">Already have an account?</h1>
          <a
            href="/login"
            className="underline text-indigo-500 hover:text-yellow-600 ease-in-out duration-300"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
