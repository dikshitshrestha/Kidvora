import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function Subscription() {
  return (
    <div className="font-poppins  py-24 px-20">
      <div className="text-center">
        <h1 className="font-bold text-indigo-400">SUBSCRIPTION PLANS</h1>
        <div className="py-5">
          <h1 className="text-4xl">Affordable Plans for Every Family</h1>
          <p className="py-2 text-zinc-700">
            Empowering young minds with a safe, interactive platform
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-4 bg-indigo-100 w-1/3 px-6 py-8 rounded-2xl shadow-xl">
          {[
            "Access to basic courses in math, reading, and science",
            "Interactive lessons with fun visuals and quizzes",
            "Weekly progress tracking for parents",
            "Age-appropriate content for children aged 5-7",
            "Regular updates with new topics",
            "24/7 customer support",
            "Printable worksheets to reinforce learning",
            "Access to a community of fellow learners",
          ].map((item, index) => (
            <div className="flex items-center gap-3">
              <div className="text-2xl text-indigo-400">
                <FaCircleCheck />
              </div>
              <h1>{item}</h1>
            </div>
          ))}
          <div className="bg-white my-4 p-4 rounded-xl flex flex-col gap-4 shadow-md">
            <h1 className="text-2xl font-sans font-semibold">Starter Plan</h1>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-semibold text-zinc-800">Rs 499</h1>
              <h1 className="text-zinc-600">/ Month</h1>
            </div>
            <p className="text-[18px] text-zinc-600">
              Perfect for young learners starting their educational journey!
            </p>
          </div>
          <div>
            <button className="text-xl w-full py-3 rounded-full underline bg-indigo-400 text-white hover:bg-zinc-800 ease-in-out duration-300">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-indigo-400 w-1/3 px-6 py-8 rounded-2xl shadow-xl">
          {[
            "Everything in the Starter Plan",
            "Priority customer support",
            "Personalized learning paths for each child",
            "Certificates of completion for courses",
            "Live weekly interactive classes with expert mentors",
            "Gamified learning challenges to boost motivation",
            "Downloadable learning materials for offline use",
            "Regular educational webinars for parents",
          ].map((item, index) => (
            <div className="flex items-center gap-3 text-white">
              <div className="text-2xl">
                <FaCircleCheck />
              </div>
              <h1>{item}</h1>
            </div>
          ))}
          <div className="bg-red-300 my-4 p-4 rounded-xl flex flex-col shadow-md gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-sans font-semibold">
                Explorer Plan
              </h1>
              <div className="py-1 bg-zinc-800 text-white px-3 rounded-full">
                Premium
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-semibold text-zinc-800">Rs 999</h1>
              <h1 className="text-zinc-600">/ Month</h1>
            </div>
            <p className="text-[18px]">
              Perfect for young learners starting their educational journey!
            </p>
          </div>
          <div>
            <button className="text-xl w-full py-3 rounded-full underline hover:bg-rose-300 hover:text-black text-white bg-zinc-800 ease-in-out duration-300">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-indigo-100 w-1/3 px-6 py-8 rounded-2xl shadow-xl">
          {[
            "Access to basic courses in math, reading, and science",
            "Interactive lessons with fun visuals and quizzes",
            "Weekly progress tracking for parents",
            "Age-appropriate content for children aged 5-7",
            "Regular updates with new topics",
            "24/7 customer support",
            "Printable worksheets to reinforce learning",
            "Access to a community of fellow learners",
          ].map((item, index) => (
            <div className="flex items-center gap-3">
              <div className="text-2xl text-indigo-400">
                <FaCircleCheck />
              </div>
              <h1>{item}</h1>
            </div>
          ))}
          <div className="bg-white my-4 p-4 rounded-xl flex flex-col gap-4 shadow-md">
            <h1 className="text-2xl font-sans font-semibold">Family Plan</h1>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-semibold text-zinc-800">Rs 1499</h1>
              <h1 className="text-zinc-600">/ Month</h1>
            </div>
            <p className="text-[18px] text-zinc-600">
              Perfect for young learners starting their educational journey!
            </p>
          </div>
          <div>
            <button className="text-xl w-full py-3 rounded-full underline bg-indigo-400 text-white hover:bg-zinc-800 ease-in-out duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
