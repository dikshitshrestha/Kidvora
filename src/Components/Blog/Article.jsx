import React from "react";
import { GoArrowRight } from "react-icons/go";
import article1 from "../../assets/article1.jpg";
import article2 from "../../assets/article2.jpg";
import article3 from "../../assets/article3.jpg";

export default function Article() {
  return (
    <div className="p-20 font-poppins">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold text-indigo-500">
          FEATURE ARTICLE
        </h1>
        <h1 className="text-4xl">
          Top Stories to Spark Ideas and Inspire Growth
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-zinc-700">
            Explore our featured articles filled with expert tips, engaging
            stories, and valuable insights
          </p>
          <button className="flex items-center gap-1.5 text-[17px] bg-indigo-400 py-3 px-12 underline text-white hover:bg-indigo-600 duration-300 ease-in-out rounded-full">
            Explore More <GoArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="row-span-2 rounded-2xl overflow-hidden relative">
          <img
            src={article1}
            alt="articleimage"
            className="h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 px-5 pt-52 pb-5 text-white bg-gradient-to-t from-black">
            <h1 className="text-3xl">
              Discover fun and simple activities to spark creativity and
              encourage imaginative play at home.
            </h1>
            <h1 className="mt-3 border-[1px] max-w-max px-3 py-1 rounded-full">
              Creativity
            </h1>
          </div>
        </div>
        <div className="group rounded-lg h-96 overflow-hidden relative">
          <img
            src={article2}
            alt="articleimage"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-0 right-0 px-5 pt-20 pb-5 text-white bg-gradient-to-t from-black">
            <h1 className="text-3xl">
              Explore techniques to help children manage stress, and improve
              focus.
            </h1>
            <h1 className="mt-3 border-[1px] max-w-max px-3 py-1 rounded-full">
              Presenting Tips
            </h1>
          </div>
        </div>
        <div className="group rounded-lg h-96 overflow-hidden relative">
          <img
            src={article3}
            alt="articleimage"
            className="h-full w-full object-cover"
          />
          <div className="absolute group-hover:opacity-100 transition-opacity duration-300 bottom-0 opacity-0 left-0 right-0 px-5 pt-20 pb-5 text-white bg-gradient-to-t from-black">
            <h1 className="text-3xl">
              Discover fun and simple activities to spark creativity and
              encourage imaginative play at home.
            </h1>
            <h1 className="mt-3 border-[1px] max-w-max px-3 py-1 rounded-full">
              STEM
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
